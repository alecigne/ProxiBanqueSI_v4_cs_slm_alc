import { Injectable, Inject } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseURL: string
  ) { }

  loadClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'client/all');
  }

  loadClientsParConseiller(idConseiller: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + '/client/' + idConseiller + "/all");
  }

  loadClient(idClient:number): Observable<Client> {
    return this.http.get<Client>(this.baseURL + 'client/'+idClient);
  }

}
