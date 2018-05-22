import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Conseiller } from '../conseiller/conseiller';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  logoImage = '/assets/logo_proxibanque3.jpg';

  currentConseiller: Conseiller;

  navItems = [
    { label: 'Accueil', path: 'accueil' },
    { label: 'Gestion Client', path: 'clients' },
    { label: 'Opérations', path: 'opérations' },
    { label: 'Gestion conseiller', path: 'conseillers' },
    { label: 'Connexion', path: 'login' },
    { label: 'Deconnexion', path: 'logout' }
  ];

  constructor(private as: AuthService) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
      });
  }
}
