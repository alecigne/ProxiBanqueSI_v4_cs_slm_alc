import { Component, OnInit } from '@angular/core';
import { Client } from '../../client/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
})
export class ClientItemComponent implements OnInit {
  currentClient: Client;

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    const clientId = +this.aRoute.snapshot.params['clientId'];

    this.clientService.loadClient(clientId)
      .subscribe(client => {
        this.currentClient = client;
      });
  }

}
