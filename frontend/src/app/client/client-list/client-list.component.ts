import { Component, OnInit, OnChanges } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit, OnChanges {

  isLoading = true;
  currentConseiller: Conseiller;
  listeClients: Client[] = [];

  constructor(
    private as: AuthService,
    private cs: ClientService
  ) {}

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.cs.loadClientsParConseiller(conseiller.idConseiller).subscribe(clients => {
          this.listeClients = clients;
          this.isLoading = false
        });
      });
  }

  ngOnChanges() {}

}
