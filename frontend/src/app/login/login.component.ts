import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = true;
  currentConseiller: Conseiller;

  constructor(
    private router: Router,
    private as: AuthService) {
  }

  ngOnInit() {
    this.as.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      });
  }

  doLogin() {
    this.as.signIn()
      .subscribe(conseiller => {
        if (conseiller) {
          this.gotoFirstPage();
        }
      });
  }

  doLogout() {
    this.as.signOut()
      .subscribe(() => {
        alert('Vous êtes déconnecté(e).');
      });
  }

  // Redirect the user to the admin homepage.
  gotoFirstPage(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['/clients']);
  }

}
