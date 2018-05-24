import { Component, OnInit, OnChanges } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CompteService } from '../../compte/compte.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {

  isLoading = true;
  currentConseiller: Conseiller;
  listeClients: Client[] = [];

  constructor(private router: Router,
    private as: AuthService,
    private clientService: ClientService,
    private compteService: CompteService
  ) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.clientService.loadClientsParConseiller(conseiller.idConseiller).subscribe(clients => {
          this.listeClients = clients;
          this.isLoading = false;
        });
      });
  }

  deleteClient(id: number) {
    this.showConfirmationModal()
      .subscribe({
        complete: () => this.clientService.deleteClient(id).subscribe(),
        error: () => { }
      });
    return false;
  }


  deleteCompteCourant(idClient:number) {
    this.showConfirmationModalCompte()
      .subscribe({
        complete: () => this.compteService.deleteCompteCourant(idClient).subscribe(),
        error: () => { }
        
})
console.log(idClient);
  }

  deleteCompteEpargne(idClient:number) {
    this.showConfirmationModalCompte()
      .subscribe({
        complete: () => this.compteService.deleteCompteEpargne(idClient).subscribe(),
        error: () => { }
})
  }

  showConfirmationModal(): Observable<any> {
    return Observable.create(observer => {
      if (confirm('Êtes-vous certain de vouloir effacer ce client de notre agence ?')) {
        observer.complete();
      } else {
        observer.error();
      }
    });
  }

  showConfirmationModalCompte(): Observable<any> {
    return Observable.create(observer => {
      if (confirm('Êtes-vous certain de vouloir supprimer ce compte de votre client ?')) {
        observer.complete();
      } else {
        observer.error();
      }
    });
  }


}
