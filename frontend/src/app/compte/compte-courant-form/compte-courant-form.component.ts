import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CompteService } from '../compte.service';
import { Compte, CompteCourant } from '../compte';
import { Client } from '../../client/client';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) { }

  ngOnInit() {
    const numCompte = +this.route.snapshot.params['numCompte'];
    console.log(numCompte)
    if (numCompte) {   // ÉDITION
      this.compteService.loadCompte(numCompte).subscribe(compteCourant => {
        this.currentCompteCourant = compteCourant;
        this.buildForm();
        if (this.currentCompteCourant.carteBancaire != null) {
          this.buildFormCarte;
        }
      });
    } else {   // CRÉATION
      this.currentCompteCourant = new CompteCourant({ decouvertAutorise: 1000 });
      this.currentCompteCourant.solde = 0;
      this.buildForm();
      if (this.currentCompteCourant.carteBancaire != null) {
        this.buildFormCarte;
      }
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
      typeCarte: []
    });
  }

  saveCompteCourant() {
    const clientId = +this.route.snapshot.params['idClient'];
    const numCompte = +this.route.snapshot.params['numCompte'];
    const compteCourant: CompteCourant = Object.assign(this.currentCompteCourant, this.compteCourantForm.value);
    compteCourant.numCompte=numCompte;
    console.log(compteCourant.numCompte);
    if (this.carteBancaire) {
      compteCourant.carteBancaire = this.carteBancaireForm.value;
    }
    this.compteService.saveCompteCourant(clientId, compteCourant).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate([`../../conseiller/idConseiller/clients/`]);
    });
  }

  addCard() {
    // this.currentCompteCourant.carteBancaire.typeCarte = 'ELECTRON';

    this.carteBancaire = true;
    this.buildFormCarte();
  }

  removeCard() {
    this.carteBancaire = false;
  }
}
