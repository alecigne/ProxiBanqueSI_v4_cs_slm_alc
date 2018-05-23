import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConseillerService } from '../conseiller/conseiller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isLoading = true;
  currentConseiller: Conseiller;
  loginForm: FormGroup;
  testConseiller: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService,
    private cs: ConseillerService) {
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
    });
    if (this.currentConseiller) {
      this.cs.loadConseillerParAuth("jdurand1", "4321").subscribe(conseiller => this.testConseiller = conseiller.login);
    }
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
    const id=this.currentConseiller.idConseiller;
        // this.router.navigate([`conseiller/${id}/clients`]);
        this.router.navigate([`accueil`]);
  }

}
