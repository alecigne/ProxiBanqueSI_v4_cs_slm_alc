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

  loadCompteCourant(numeroCompte: number): Observable<CompteCourant> {
    return this.http.get(`${this.baseUrl}CompteCourant/${numeroCompte}`)
      .map(ccData => new CompteCourant(ccData));
  }

  loadCompteEpargne(numeroCompte: number): Observable<CompteEpargne>{
    return this.http.get(`${this.baseUrl}CompteEpargne/${numeroCompte}`)
      .map(ceData => new CompteEpargne(ceData));
  }

  saveCompteCourant(idClient: number, compteCourant: CompteCourant): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteCourant/` + (compteCourant.numeroCompte ? `/${compteCourant.numeroCompte}` : '');
    const method = compteCourant.numeroCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteCourant });
  }

  saveCompteEpargne(idClient: number, compteEpargne: CompteEpargne): Observable<any> {
    const url = `${this.baseUrl}client/${idClient}/CompteEpargne/` + (compteEpargne.numeroCompte ? `/${compteEpargne.numeroCompte}` : '');
    const method = compteEpargne.numeroCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compteEpargne });
  }
}
