import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {

  items = [
    { image: '/assets/banque-demain.jpg' },
    { image: '/assets/banque-croissance.jpg' },
    { image: '/assets/banque-travaux.jpg' },
  ]

  currentConseiller: Conseiller;

  maintenant = new Date();
  jour = this.maintenant.getDate();
  mois = this.maintenant.getMonth() + 1;
  an = this.maintenant.getFullYear();

  image1 = '/assets/ethique.jpg';
  image2 = '/assets/manger.jpg';
  image3 = '/assets/cochon.jpg';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentConseiller().subscribe(
      conseiller => {
        this.currentConseiller = conseiller;
      });
  }

}
