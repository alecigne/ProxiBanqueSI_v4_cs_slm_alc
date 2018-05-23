import { Component, OnInit } from '@angular/core';
import { Client } from '../../client/client';
import { Compte } from '../../client/compte';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-cc-item',
  templateUrl: './cc-item.component.html',
})
export class CcItemComponent implements OnInit {
  currentClient: Client;
  currentCompteCourant: Compte;

  constructor(private aRoute: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    const clientId = +this.aRoute.snapshot.params['clientId'];

    this.clientService.loadClient(clientId)
      .subscribe(client => {
        this.currentClient = client;
        this.currentCompteCourant = this.currentClient.compteCourant;
      });
  }
}
