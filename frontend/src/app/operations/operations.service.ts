import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OperationsService {

  constructor(private http: HttpClient,
  @Inject('BACKEND_URL') private baseURL: string
) { }

  virement(numCompteDepart, numCompteArrivee, montant){
    console.log('URL requete : '+this.baseURL + 'virement/'+numCompteDepart+'/'+numCompteArrivee+'/'+montant)
    this.http.put(this.baseURL + 'virement/'+numCompteDepart+'/'+numCompteArrivee+'/'+montant,'',{});
  }

}
