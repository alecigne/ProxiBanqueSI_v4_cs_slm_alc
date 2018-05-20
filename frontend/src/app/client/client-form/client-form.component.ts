import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],

})
export class ClientFormComponent implements OnInit {

  currentClient: Client;
  clientForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const clientId = +this.route.snapshot.params['client'];
    // ÉDITION
    this.service.loadClient(clientId).subscribe(client => {
      this.currentClient = client;
      this.buildForm();
    });
  }


  buildForm() {
    this.clientForm = this.fb.group({
      nom: [this.currentClient.nom, [Validators.required, Validators.minLength(3)]],
      prenom: [this.currentClient.prenom, Validators.required],
    });
  }



}

