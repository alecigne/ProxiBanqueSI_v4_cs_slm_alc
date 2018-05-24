import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CompteService } from '../compte.service';
import { Compte, CompteCourant } from '../compte';
import { Client } from '../../client/client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-compte-courant-form',
  templateUrl: './compte-courant-form.component.html'
})
export class CompteCourantFormComponent implements OnInit {

  compteCourantForm: FormGroup;
  carteBancaireForm: FormGroup;
  currentCompteCourant: CompteCourant;
  currentClient: Client;
  idClient: number;
  numeroCompte: number;
  carte = null;
  carteBancaire: boolean = false;
  hasCard: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) { }

  ngOnInit() {
    const numCompte = +this.route.snapshot.params['numCompte'];
    this.numeroCompte = numCompte;
    console.log(this.numeroCompte);
    if (numCompte) {   // ÉDITION
      this.compteService.loadCompte(numCompte).subscribe(compteCourant => {
        this.currentCompteCourant = compteCourant;
        this.buildForm();
        this.currentCompteCourant.carteBancaire = compteCourant.carteBancaire;
        if (this.currentCompteCourant.carteBancaire != null) {
          this.buildFormCarte();
        } else {
          this.buildFormCarte2();
        }
      });
    } else {   // CRÉATION
      this.currentCompteCourant = new CompteCourant({ decouvertAutorise: 1000 });
      this.currentCompteCourant.solde = 0;
      this.buildForm();
      // if (this.currentCompteCourant.carteBancaire != null) {
      this.buildFormCarte2();
      // }
    }

  }

  buildForm() {
    this.compteCourantForm = this.formBuilder.group({
      solde: [this.currentCompteCourant.solde],
      decouvertAutorise: [this.currentCompteCourant.decouvertAutorise],
    });
  }

  buildFormCarte() {
    this.carteBancaireForm = this.formBuilder.group({
      typeCarte: [this.currentCompteCourant.carteBancaire.typeCarte]
    });
  }

  buildFormCarte2() {
    this.carteBancaireForm = this.formBuilder.group({
      typeCarte: ['ELECTRON']
    });
  }

  saveCompteCourant() {
    const clientId = +this.route.snapshot.params['idClient'];
    const numCompte = +this.route.snapshot.params['numCompte'];
    const compteCourant: CompteCourant = Object.assign(this.currentCompteCourant, this.compteCourantForm.value);
    compteCourant.numCompte = numCompte;
    if (this.carteBancaire) {
      compteCourant.carteBancaire = this.carteBancaireForm.value;
    }
    this.compteService.saveCompteCourant(clientId, compteCourant).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate([`../../conseiller/idConseiller/clients/`]);
    });
  }

  addCard() {
    this.carteBancaire = true;
    this.buildFormCarte();
  }

  removeCard() {
    this.carteBancaire = false;
    this.currentCompteCourant.carteBancaire = null;
  }

  removeCard3() {
    this.currentCompteCourant.carteBancaire = null;
  }

  removeCard2() {
    this.showConfirmationModalCarte().subscribe({
      complete: () => this.removeCard3(),
      error: () => { }
    })
  }

  showConfirmationModalCarte(): Observable<any> {
    return Observable.create(observerCarte => {
      if (confirm('Êtes-vous certain de vouloir supprimer la carte ?')) {
        observerCarte.complete();
      } else {
        observerCarte.error();
      }
    });
  }

  goBack() {
    this.router.navigate(['conseiller/:idConseiller/clients']);
  }
}
