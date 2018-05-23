import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Conseiller } from '../conseiller/conseiller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  logoImage = '/assets/logo_proxibanque3.jpg';

  currentConseiller: Conseiller;

  navItems = [
    { label: 'Accueil', path: 'accueil' },
    { label: 'Gestion Client', path: 'conseiller/:idConseiller/clients' },
    { label: 'Opérations', path: 'operations' },
    // { label: 'Gestion Conseiller', path: 'conseillers' },
    // { label: 'Transactions', path: 'transactions' },
    // { label: 'Connexion', path: 'login' },
    // { label: 'Deconnexion', path: 'logout' }
  ];

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
      });
  }

  doLogin() {
    this.as.signIn()
      .subscribe(conseiller => {
        if (conseiller) {
          this.gotoClients();
        }
      });
  }

  doLogout() {
    this.as.signOut()
      .subscribe(() => {
        alert('Vous êtes déconnecté(e).');
      });
  }

  gotoClients(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['/clients']);
  }
}
