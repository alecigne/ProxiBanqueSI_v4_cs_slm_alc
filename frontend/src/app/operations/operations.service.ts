import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperationsService {

  constructor(
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseURL: string
  ) { }

  virement(numCompteDepart, numCompteArrivee, montant): Promise<any> {
    return this.http.put(this.baseURL + 'virement',
      {
        numCompteDepart: +numCompteDepart,
        numCompteArrivee: +numCompteArrivee,
        montantTransfere: montant
      }).toPromise();
  }

  CrediterCompte(numCompte, montant): Promise<any> {
    return this.http.put(this.baseURL + 'creditercompte/' + numCompte + '/' + montant, {}).toPromise();
  }

  credit(montant: number, duree: number, taux: number): Observable<number> {
    return this.http.get<number>(this.baseURL + 'credit/' + montant + '/' + duree + '/' + taux + '/');
  }

}
