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

@Injectable()
export class AuthService {
  private conseillerObs = new ReplaySubject<Conseiller>(1);
  private isLoggedInObs = new ReplaySubject<boolean>(1);

  constructor(@Inject(DOCUMENT) private document) {
    this.checkCurrentConseiller();
  }

  getCurrentConseiller(): Observable<Conseiller> {
    return this.conseillerObs.asObservable();
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInObs.asObservable();
  }

   /**
   * Vérifier si un conseiller est présent (cookie).
   */
  checkCurrentConseiller() {
    let conseiller;
    const conseillerCookie = this.getCookie('conseiller');
    if (conseillerCookie) {
      const conseillerData = JSON.parse(conseillerCookie);
      conseiller = new Conseiller(conseillerData);
    }
    this.conseillerObs.next(conseiller);
    this.isLoggedInObs.next(!!conseiller);
  }

  signIn(): Observable<Conseiller> {
    const conseillerData = {
      idConseiller: 1,
      nom: 'Durand',
      prenom: 'Jacques',
      login: 'jdurand',
      password: '1234'
    };
    this.setCookie('conseiller', JSON.stringify(conseillerData));
    this.checkCurrentConseiller();
    return Observable.of(new Conseiller(conseillerData));
  }

  signOut(): Observable<any> {
    // console.log('deleteCookie');
    this.deleteCookie('conseiller');
    this.checkCurrentConseiller();
    return Observable.of(undefined);
  }

  //
  // Private methods
  //

  private setCookie(name: string, value: string) {
    this.document.cookie = `${name}=${value}`;
  }

  /**
   * Quick & dirty way to extract a specific cookie
   * from the cookie string.
   *
   * Cookie string format: "name=Vince; foo=bar"
   */
  private getCookie(name: string = ''): string {
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
