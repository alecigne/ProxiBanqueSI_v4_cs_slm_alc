import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //logoImage = '/assets/logo_superquiz.png';

  user = {name: 'Bob'};

  navItems = [
    {label: 'Accueil', path: 'home'},
    {label: 'Gestion Client', path: 'gestionclients'},
    {label: 'Opérations', path: 'opérations'},
    {label: 'Gestion conseiller', path: 'gestionconseiller'},
    {label: 'Connexion', path: 'login'},
    {label: 'Deconnexion', path: 'logout'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
