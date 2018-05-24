import { Injectable, Inject } from '@angular/core';
import { Compte, CompteCourant, CompteEpargne } from './compte';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client';


@Injectable()
export class CompteService {

  constructor(private http: HttpClient, @Inject('BACKEND_URL') private baseUrl: string, private clientService: ClientService) { }

  loadCompteCourant(numCompte: number): Observable<CompteCourant> {
    return this.http.get(`${this.baseUrl}CompteCourant/${numCompte}`)
      .map(ccData => new CompteCourant(ccData));
  }

  loadCompteEpargne(numCompte: number): Observable<CompteEpargne> {
    return this.http.get(`${this.baseUrl}CompteEpargne/${numCompte}`)
      .map(ceData => new CompteEpargne(ceData));
  }

  saveCompteCourant(idClient: number, compteCourant: CompteCourant): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteCourant/` + (compteCourant.numCompte ? `/${compteCourant.numCompte}` : '');
    const method = compteCourant.numCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteCourant });
  }

  saveCompteEpargne(idClient: number, compteEpargne: CompteEpargne): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteEpargne/` + (compteEpargne.numCompte ? `/${compteEpargne.numCompte}` : '');
    const method = compteEpargne.numCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteEpargne });
  }

  deleteCompteCourant(idClient: number) {
    return this.http.delete(`${this.baseUrl}client/${idClient}/compteCourant`);
  }

  deleteCompteEpargne(idClient: number) {
    return this.http.delete(`${this.baseUrl}client/${idClient}/compteEpargne`);
  }
}
