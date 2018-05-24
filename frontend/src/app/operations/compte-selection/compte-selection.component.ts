import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../client/client';
import { ClientService } from '../../client/client.service';
import { AuthService } from '../../services/auth.service';
import { Conseiller } from '../../conseiller/conseiller';
import { Compte } from '../../compte/compte';

@Component({
  selector: 'app-compte-selection',
  templateUrl: './compte-selection.component.html',
  styleUrls: ['./compte-selection.component.css']
})
export class CompteSelectionComponent implements OnInit {
  @Input() departOuArrivee: string;

  @Output() numeroCompte: EventEmitter<number> = new EventEmitter<number>();
  clients: Client[];
  currentConseiller: Conseiller;
  listeCompte: Compte[];

  selectedAccount
  selectedClient

  constructor(private service: ClientService, private as: AuthService) { }

  ngOnInit() {
    if (this.departOuArrivee !== 'credité') {
      this.as.getCurrentConseiller().subscribe(
        conseiller => {
          this.currentConseiller = conseiller;
          this.service.loadClientsParConseiller(conseiller.idConseiller).subscribe(listeClients => {
            this.clients = listeClients;
          })
        });

    } else {
      this.service.loadClients().subscribe(
        listeClients => {
          this.clients = listeClients;}
      );
    }
  }

  currentClient() {
    return this.selectedClient ? this.clients.filter(value => value.idClient === +this.selectedClient).shift() : undefined;
  }

  emit() {

    this.numeroCompte.emit(this.selectedAccount ? this.selectedAccount : undefined);

  }




}
