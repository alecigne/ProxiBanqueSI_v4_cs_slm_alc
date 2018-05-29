import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {

  items = [
    { image: '/assets/ethique.jpg' },
    { image: '/assets/ethique.jpg' },
    { image: '/assets/ethique.jpg' },
  ]

  currentConseiller: Conseiller;

  maintenant = new Date();
  jour = this.maintenant.getDate();
  mois = this.maintenant.getMonth() + 1;
  an = this.maintenant.getFullYear();

  image1 = '/assets/ethique.jpg';
  image2 = '/assets/manger.jpg';
  image3 = '/assets/cochon.jpg';

  constructor(private as: AuthService) { }

  ngOnInit() {
    this.currentConseiller = JSON.parse(this.as.getCookie());
  }

  // addSlide() {
  //   this.items.push({
  //     title: `Slide 4`
  //   });
  // }
}
