import { Injectable, Inject } from '@angular/core';
import { Compte, CompteCourant } from './compte';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client';


@Injectable()
export class CompteService {

  constructor(private http: HttpClient, @Inject('BACKEND_URL') private baseUrl: string, private clientService: ClientService) { }

  loadCompteCourant(numeroCompte: number): Observable<CompteCourant> {
    return this.http.get(`${this.baseUrl}/comptecourant/${numeroCompte}`)
      .map(ccData => new CompteCourant(ccData));
  }
  saveCompteCourant(idClient: number, compte: Compte): Observable<any> {
    const url = `${this.baseUrl}/client/${idClient}/comptecourant` + (compte.numeroCompte ? `/${compte.numeroCompte}` : '');
    const method = compte.numeroCompte ? 'put' : 'post';
    return this.http.request(method, url, { body: compte });
  }
}
