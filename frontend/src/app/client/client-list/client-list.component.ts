import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CompteService } from '../../compte/compte.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {

  isLoading = true;
  currentConseiller: Conseiller;
  listeClients: Client[] = [];

  constructor(
    @Inject(DOCUMENT) private document,
    private router: Router,
    private as: AuthService,
    private clientService: ClientService,
    private compteService: CompteService
  ) { }

  ngOnInit() {
    const conseiller = JSON.parse(this.getCookie());
    this.currentConseiller = conseiller;
    this.clientService.loadClientsParConseiller(conseiller.idConseiller).subscribe(clients => {
          this.listeClients = clients;
          this.isLoading = false;
    });
  }

  getCookie(name: string = ''): string {
    const allCookiesString = this.document.cookie;
    const index1 = allCookiesString.indexOf(name);
    if (index1 !== -1) {
      let index2 = allCookiesString.indexOf(';', index1);
      index2 = index2 === -1 ? allCookiesString.length : index2;
      const cookieString = allCookiesString.slice(index1, index2);
      return cookieString.split('=')[1];
    }
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
