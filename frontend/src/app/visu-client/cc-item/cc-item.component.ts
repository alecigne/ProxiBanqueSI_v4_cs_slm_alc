import { Component, OnInit } from '@angular/core';
import { Client } from '../../client/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { CompteCourant } from '../../compte/compte';

@Component({
  selector: 'app-cc-item',
  templateUrl: './cc-item.component.html',
})
export class CcItemComponent implements OnInit {
  currentClient: Client;
  currentCompteCourant: CompteCourant;
  currentCarte: string;

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    const clientId = +this.aRoute.snapshot.params['clientId'];

    this.clientService.loadClient(clientId)
      .subscribe(client => {
        this.currentClient = client;
        this.currentCompteCourant = this.currentClient.compteCourant;
      });
  }
}
