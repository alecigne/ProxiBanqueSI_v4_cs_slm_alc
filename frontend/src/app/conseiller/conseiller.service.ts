import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Conseiller } from './conseiller';
import 'rxjs/add/operator/map';

@Injectable()
export class ConseillerService {

  constructor(
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseURL: string
  ) { }

  /**
  * Affiche un client par son id.
  */
  loadConseillerParAuth(login: string, password: string): Observable<Conseiller> {
    return this.http.get<Conseiller>(`${this.baseURL}conseiller/${login}/${password}`);
  }

}
