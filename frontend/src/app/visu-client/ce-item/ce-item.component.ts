import { Component, OnInit } from '@angular/core';
import { Client } from '../../client/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { Compte } from '../../client/compte';

@Component({
  selector: 'app-ce-item',
  templateUrl: './ce-item.component.html',
  styleUrls: ['./ce-item.component.css']
})
export class CeItemComponent implements OnInit {

  currentClient: Client;
  currentCompteEpargne:Compte;

  constructor(private aRoute: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    const clientId = +this.aRoute.snapshot.params['clientId'];

    this.clientService.loadClient(clientId)
      .subscribe(client => {
        this.currentClient = client;
        this.currentCompteEpargne=this.currentClient.compteEpargne;
      });
    }

}
