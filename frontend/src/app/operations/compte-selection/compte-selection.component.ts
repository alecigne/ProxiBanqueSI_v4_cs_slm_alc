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
  // comptenum: number;
  clients: Client[];
  currentConseiller: Conseiller;
  // isLoading = true;
  // currentClient: Client;
  listeCompte: Compte[];

  selectedAccount
  selectedClient

  constructor(private service: ClientService, private as: AuthService) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.service.loadClientsParConseiller(conseiller.idConseiller).subscribe(listeClients => {
          this.clients = listeClients;
          // this.isLoading = false;
        });

      })
  }

  currentClient(){
    return  this.selectedClient ? this.clients.filter(value => value.idClient === +this.selectedClient).shift() : undefined;
  }
  // selectClient(idClient: number) {
  //   this.currentClient = idClient ? this.clients.filter(value => value.idClient === +idClient).shift() : undefined;
  //   this.selectedAccount=undefined;
  // }

  emit() {
    // this.comptenum = numCompte ? numCompte : undefined;
    // console.log(`account ${(numCompte)} ${(this.comptenum)} selected!`);
    this.numeroCompte.emit(this.selectedAccount?this.selectedAccount:undefined);
    // console.log('----',this.selectedAccount)
  }




}
