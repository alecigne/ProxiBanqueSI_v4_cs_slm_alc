import { Component, OnInit } from '@angular/core';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) { }

  ngOnInit() {
    const numCompte = +this.route.snapshot.params['numeroCompte'];

    if (numCompte) {   // ÉDITION
      this.compteService.loadCompteCourant(numCompte).subscribe(compteCourant => {
        this.currentCompteCourant = compteCourant;
        this.buildForm();
      });
    } else {   // CRÉATION
      this.currentCompteCourant = new CompteCourant({ decouvertAutorise: 1000 });
      this.currentCompteCourant.solde = 0;
      this.currentCompteCourant.carteBancaire.typeCarte = 'AUCUNE';
      this.buildForm();
      console.log(this.currentCompteCourant.carteBancaire)
    }
  }

  buildForm() {
    this.compteCourantForm = this.formBuilder.group({
      solde: [this.currentCompteCourant.solde],
      decouvertAutorise: [this.currentCompteCourant.decouvertAutorise],
      // carte: [this.currentCompteCourant.carteBancaire.typeCarte],
    });
    this.carteBancaireForm = this.formBuilder.group({
      typeCarte: [this.currentCompteCourant.carteBancaire.typeCarte]
    });
  }

  saveCompteCourant() {
    const clientId = +this.route.snapshot.params['idClient'];
    const idConseiller = +this.route.snapshot.params['idConseiller'];
    const compteCourant: CompteCourant = Object.assign(this.currentCompteCourant, this.compteCourantForm.value);
    compteCourant.carteBancaire = this.carteBancaireForm.value;
    console.log(compteCourant);
    console.log(compteCourant.carteBancaire);
    this.compteService.saveCompteCourant(clientId, compteCourant).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate([`../../conseiller/idConseiller/clients/`]);
    });
  }
}
