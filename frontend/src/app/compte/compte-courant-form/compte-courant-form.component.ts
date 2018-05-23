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
      this.currentCompteCourant = new CompteCourant({ decouvertAutorise: 1000, carte: 'AUCUNE' });
      this.currentCompteCourant.solde = 0;
      this.buildForm();

    }
  }

  buildForm() {
    this.compteCourantForm = this.formBuilder.group({
      solde: [this.currentCompteCourant.solde],
      decouvertAutorise: [this.currentCompteCourant.decouvertAutorise],
      carte: [this.currentCompteCourant.carte]
    });
  }

  saveCompteCourant() {
    const clientId = +this.route.snapshot.params['idClient'];
    const compteCourant: CompteCourant = Object.assign(this.currentCompteCourant, this.compteCourantForm.value);
    this.compteService.saveCompteCourant(clientId, compteCourant).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate(['clients/']);
    });
  }
}
