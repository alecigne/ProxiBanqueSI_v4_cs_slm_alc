import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public headerData;

  constructor(private as: AuthService) {}

  // Le conseiller est envoyé en input toutes les 250 ms (méthode brute force, à changer...)
  ngOnInit() {
    setInterval(()=>{
      this.headerData = this.as.getCookie('conseiller');
    }, 250);
  }

}
