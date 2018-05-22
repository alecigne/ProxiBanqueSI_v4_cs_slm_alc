import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  isLoading = true;
  currentConseiller: Conseiller;
  listeClients: Client[] = [];

  constructor(
    private as: AuthService, private cs: ClientService) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        // Aussitôt qu'un conseiller est observé, réaliser ces actions
        this.currentConseiller = conseiller;
        this.isLoading = false;
        this.cs.loadClientsParConseiller(conseiller.idConseiller).subscribe(clients => this.listeClients = clients);
      });
  }

}
