import { Injectable, Inject } from '@angular/core';
import { Compte, CompteCourant, CompteEpargne } from './compte';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client';


@Injectable()
export class CompteService {

  constructor(
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string,
    private clientService: ClientService) { }

  /**
  * Affiche un compte par son numéro.
  */
  loadCompte(numCompte: number): Observable<any> {
    return this.http.get(`${this.baseUrl}compte/${numCompte}`)
  }

  /**
  * Sauvegarde le compte courant du formulaire.
  */
  saveCompteCourant(idClient: number, compteCourant: CompteCourant): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteCourant` + (compteCourant.numCompte ? `/${compteCourant.numCompte}` : '');
    const method = compteCourant.numCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteCourant });
  }

  /**
  * Sauvegarde le compte épargne du formulaire.
  */
  saveCompteEpargne(idClient: number, compteEpargne: CompteEpargne): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteEpargne` + (compteEpargne.numCompte ? `/${compteEpargne.numCompte}` : '');
    const method = compteEpargne.numCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteEpargne });
  }

  /**
  * Supprime le compte courant sélectionné.
  */
  deleteCompteCourant(idClient: number) {
    return this.http.delete(`${this.baseUrl}client/${idClient}/CompteCourant`);
  }

  /**
  * Supprime le compte épargne sélectionné.
  */
  deleteCompteEpargne(idClient: number) {
    return this.http.delete(`${this.baseUrl}client/${idClient}/CompteEpargne`);
  }
}
