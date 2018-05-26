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
    { label: 'Opérations', path: 'operations' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
      });
  }

  doLogin() {
    this.authService.signIn()
      .subscribe(conseiller => {
        if (conseiller) {
          this.gotoClients();
        }
      });
  }

  doLogout() {
    this.authService.signOut()
      .subscribe(() => {
        alert('Vous êtes déconnecté(e).');
      });
  }

  gotoClients(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['/clients']);
  }
}
