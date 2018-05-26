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
    private authService: AuthService,
    private clientService: ClientService,
    private compteService: CompteService
  ) { }

  ngOnInit() {
    this.authService.getCurrentConseiller().subscribe(
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
        complete: () => this.clientService.deleteClient(id).subscribe(() => this.clientService.loadClientsParConseiller(this.currentConseiller.idConseiller)
          .subscribe(clients => { this.listeClients = clients; })),
        error: () => { }
      });
    return false;
  }

  deleteCompteCourant(idClient: number) {
    this.showConfirmationModalCompte()
      .subscribe({
        complete: () => this.compteService.deleteCompteCourant(idClient)
          .subscribe(() => this.clientService.loadClientsParConseiller(this.currentConseiller.idConseiller)
            .subscribe(clients => { this.listeClients = clients; })),
        error: () => { }
      })
  }

  deleteCompteEpargne(idClient: number) {
    this.showConfirmationModalCompte()
      .subscribe({
        complete: () => this.compteService.deleteCompteEpargne(idClient).subscribe(() => this.clientService.loadClientsParConseiller(this.currentConseiller.idConseiller)
          .subscribe(clients => { this.listeClients = clients; })),
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
    return Observable.create(observerCompte => {
      if (confirm('Êtes-vous certain de vouloir supprimer ce compte de votre client ?')) {
        observerCompte.complete();
      } else {
        observerCompte.error();
      }
    });
  }

  triAlphabetique(a, b) {
    if (a.nom < b.nom) {
      return -1;
    } else if (a.nom == b.nom) {
      return 0;
    } else {
      return 1;
    }
  }

  trierClients() {
    this.listeClients.sort(this.triAlphabetique)
  }
}
