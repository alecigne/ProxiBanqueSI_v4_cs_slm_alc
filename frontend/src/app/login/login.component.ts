import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isLoading = true;
  currentConseiller: Conseiller;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
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
    this.loginForm = this.fb.group({
      // Les validateurs doivent être exploités
      login: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    })
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

  // Redirect the user to the admin homepage.
  gotoClients(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['/clients']);
  }

}
