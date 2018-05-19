import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  listeClients: Client[];

  constructor(private cs: ClientService) { }

  ngOnInit() {
    this.cs.loadClients().subscribe(clients => this.listeClients = clients);
  }

}
