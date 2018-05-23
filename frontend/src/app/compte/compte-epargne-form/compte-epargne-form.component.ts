import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompteService } from '../compte.service';
import { CompteEpargne } from '../compte';
import { Client } from '../../client/client';

@Component({
  selector: 'app-compte-epargne-form',
  templateUrl: './compte-epargne-form.component.html',
})
export class CompteEpargneFormComponent implements OnInit {

  compteEpargneForm: FormGroup;
  currentCompteEpargne: CompteEpargne;
  currentClient: Client;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) { }

  ngOnInit() {
    const numCompte = +this.route.snapshot.params['numeroCompte'];

    if (numCompte) {   // ÉDITION
      this.compteService.loadCompteEpargne(numCompte).subscribe(compteEpargne => {
        this.currentCompteEpargne = compteEpargne;
        this.buildForm();
      });
    } else {   // CRÉATION
      this.currentCompteEpargne = new CompteEpargne({ tauxRemun: 0.03 });
      this.currentCompteEpargne.solde = 0;
      this.buildForm();

    }
  }

  buildForm() {
    this.compteEpargneForm = this.formBuilder.group({
      solde: [this.currentCompteEpargne.solde],
      tauxRemuneration: [this.currentCompteEpargne.tauxRemun]
    });
  }

  saveCompteEpargne() {
    const clientId = +this.route.snapshot.params['idClient'];
    const idConseiller = +this.route.snapshot.params['idConseiller'];
    const compteEpargne: CompteEpargne = Object.assign(this.currentCompteEpargne, this.compteEpargneForm.value);
    this.compteService.saveCompteEpargne(clientId, compteEpargne).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate([`../../conseiller/idConseiller/clients/`]);
    });

  }
}
