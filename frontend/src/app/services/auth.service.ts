/**
 * @file
 * Dummy cookie-based auth.
 * Authenticating just means setting a 'user' cookie. No password required.
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';
import { Conseiller } from '../conseiller/conseiller';
import { ConseillerService } from '../conseiller/conseiller.service';

@Injectable()
export class AuthService {
  private conseillerObs = new ReplaySubject<Conseiller>(1);
  private isLoggedInObs = new ReplaySubject<boolean>(1);

  constructor(@Inject(DOCUMENT) private document, private cs: ConseillerService) {
  }

  login(login: string, password: string): Observable<Conseiller> {
    return this.cs.loadConseillerParAuth(login, password);
}

  setCookie(name: string, value: string) {
    this.document.cookie = `${name}=${value}`;
  }

  /**
   * Quick & dirty way to extract a specific cookie
   * from the cookie string.
   */
  getCookie(name: string = '') {
    const allCookiesString = this.document.cookie;
    const index1 = allCookiesString.indexOf(name);
    if (index1 !== -1) {
      let index2 = allCookiesString.indexOf(';', index1);
      index2 = index2 === -1 ? allCookiesString.length : index2;
      const cookieString = allCookiesString.slice(index1, index2);
      return cookieString.split('=')[1];
    }
  }

  deleteCookie(name: string) {
    this.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }

}
