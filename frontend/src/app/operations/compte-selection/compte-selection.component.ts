import { Component, OnInit, Input } from '@angular/core';
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
  @Input() compte: string;
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
      console.log(this.clients);
      //this.clients.forEach(element => {element.id=element.idClient})

      this.currentClient = this.clients.filter(value => value.id === +idClient).shift();
      console.log(this.currentClient);
      this.listeCompte = [this.currentClient.compteCourant, this.currentClient.compteEpargne];
    }

  }

  selectAccount(numCompte: Number) {
    if (numCompte) {
      console.log(`account ${(numCompte)} selected!`)
    }
  }




}
