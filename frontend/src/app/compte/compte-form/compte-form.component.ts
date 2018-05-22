import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CompteService } from '../compte.service';
import { Compte, CompteCourant } from '../compte';
import { Client } from '../../client/client';

@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html'
})
export class CompteFormComponent implements OnInit {

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
    this.compteCourantForm = this.formBuilder.group({
      solde: [0],
      decouvertAutorise: [1000],
      carte: []
    });

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.numeroCompte = Number(param.get('numeroCompte'));
      if (this.numeroCompte) {
        this.compteService.loadCompteCourant(this.numeroCompte).subscribe(comptecourant => {
          this.compteCourantForm.patchValue(comptecourant);
        });
      }
    });
  }

  saveCompteCourant() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.idClient = Number(param.get('idClient'));
      const compteData = this.compteCourantForm.value;
      const comptecourant = new CompteCourant(compteData);
      comptecourant.numeroCompte = this.numeroCompte;
      this.compteService.saveCompteCourant(this.idClient, comptecourant).subscribe(() => {
        alert('Compte courant enregistré avec succès');
      });
    })
  }
}
