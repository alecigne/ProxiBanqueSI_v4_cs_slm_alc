import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ClientService } from '../client.service';
import { Client } from '../client';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',

})
export class ClientFormComponent implements OnInit {

  currentClient: Client;
  currentConseiller: Conseiller
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    const clientId = +this.route.snapshot.params['clientId'];

    if (clientId) {   // ÉDITION
      this.clientService.loadClient(clientId).subscribe(client => {
        this.currentClient = client;
        this.buildForm();
      });
    } else {   // CRÉATION
      this.currentClient = new Client();
      this.buildForm();
    }
  }

  buildForm() {
    this.authService.getCurrentConseiller().subscribe(
      conseiller => { this.currentConseiller = conseiller })

    this.clientForm = this.formBuilder.group({
      nom: [this.currentClient.nom, [Validators.required, Validators.minLength(2)]],
      prenom: [this.currentClient.prenom, Validators.required],
      email: [this.currentClient.email, Validators.required],
      adresse: [this.currentClient.adresse],
      codePostal: [this.currentClient.codePostal, [Validators.maxLength(5), Validators.minLength(5)]],
      ville: [this.currentClient.ville],
      telephone: [this.currentClient.telephone, [Validators.maxLength(10), Validators.minLength(10)]],
      //idConseiller: [this.currentConseiller.idConseiller]
    });
  }


  saveClient() {
    const client: Client = Object.assign(this.currentClient, this.clientForm.value);
    this.clientService.saveClient(client).subscribe(() => {
      alert('Le client a été enregistré avec succès');
      this.router.navigate(['clients/']);
      // this.router.navigate([`client/${client.id}/nouveaucompte`]);
    });

  }

}

