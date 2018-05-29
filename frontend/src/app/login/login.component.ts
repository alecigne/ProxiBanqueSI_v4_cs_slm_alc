import { Component, OnInit, Input } from '@angular/core';
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

  currentConseiller: Conseiller;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService,
    private cs: ConseillerService) {
  }

  ngOnInit() {
    this.currentConseiller = JSON.parse(this.as.getCookie());
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  doLogin() {
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.as.login(login, password)
      .map(fullConseiller => new Conseiller(fullConseiller))
      .subscribe(conseiller => {
        this.currentConseiller = conseiller;
        this.as.setCookie('conseiller', JSON.stringify(this.currentConseiller));
      });
    this.home();
  }

  home(event?: Event) {
    this.router.navigate(['accueil']);
  }

}
