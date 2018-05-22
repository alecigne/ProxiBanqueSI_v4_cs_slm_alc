import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Conseiller } from '../conseiller/conseiller';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoImage = '/assets/logo_proxibanque.png';

  currentConseiller: Conseiller;

  navItems = [
    {label: 'Accueil', path: 'home'},
    {label: 'Gestion Client', path: 'gestionclients'},
    {label: 'Opérations', path: 'opérations'},
    {label: 'Gestion conseiller', path: 'gestionconseiller'},
    {label: 'Connexion', path: 'login'},
    {label: 'Deconnexion', path: 'logout'}
  ];

  constructor(private as:AuthService) { }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
      });
  }
}
