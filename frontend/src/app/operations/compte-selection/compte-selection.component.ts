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
  @Output() numeroCompte:EventEmitter<number> = new EventEmitter<number>();
  comptenum:number;
  clients: Client[];
  currentConseiller: Conseiller;
  isLoading = true;
  currentClient: Client;
  listeCompte: Compte[];

  constructor(private service: ClientService, private as: AuthService) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.service.loadClientsParConseiller(conseiller.idConseiller).subscribe(listeClients => {
          this.clients = listeClients;
          this.isLoading = false;
        });
      }}

  selectClient(idClient: number) {
    if (idClient) {
      this.currentClient = this.clients.filter(value => value.id === +idClient).shift();
      console.log(this.currentClient);
      this.listeCompte = [this.currentClient.compteCourant, this.currentClient.compteEpargne];
    }

  }

  selectAccount(numCompte: number) {
    if (numCompte) {
      this.comptenum = numCompte;
      console.log(`account ${(numCompte)} ${(this.comptenum)} selected!`)
    }
  }

  declencher() {
    this.numeroCompte.emit(this.comptenum);
    //console.log(this.comptenum, this.departOuArrivee);
  }




}
