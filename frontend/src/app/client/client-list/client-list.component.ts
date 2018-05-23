import { Component, OnInit, OnChanges } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Conseiller } from '../../conseiller/conseiller';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
    private cs: ClientService
  ) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.cs.loadClientsParConseiller(conseiller.idConseiller).subscribe(clients => {
          this.listeClients = clients;
          this.isLoading = false;
        });
      });
  }

  deleteClient(id: number) {
    this.showConfirmationModal()
      .subscribe({
        complete: () => this.cs.deleteClient(id).subscribe(),
        error: () => { }
      });
    return false;
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
}
