import { Injectable, Inject } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseURL: string
  ) { }

  /**
  * Affiche la liste des clients.
  */
  loadClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'client/all');
  }

  loadClientsParConseiller(idConseiller: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'client/' + idConseiller + "/all");
  }

  /**
  * Affiche un client par son id.
  */
  loadClient(idClient: number): Observable<Client> {
    return this.http.get(`${this.baseURL}client/${idClient}`)
      .map(clientData => new Client(clientData));
  }

  /**
  * Sauvegarde le client du formulaire (nouveau ou édité selon l'url).
  */
  saveClient(client: Client): Observable<any> {
    const url = `${this.baseURL}client/` + (client.id ? `${client.id}` : '');
    const method = client.id ? 'put' : 'post';
    return this.http.request(method, url, { body: client });
  }


  /**
  * Supprime le client sélectionné.
  */
  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}clients/${clientId}`);
  }

}
