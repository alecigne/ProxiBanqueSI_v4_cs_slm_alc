import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller/conseiller';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {

  currentConseiller: Conseiller;

  maintenant = new Date();
  jour = this.maintenant.getDate();
  mois = this.maintenant.getMonth() + 1;
  an = this.maintenant.getFullYear();
 
  image1='/assets/ethique.jpg';
  image2='/assets/manger.jpg';
  image3='/assets/cochon.jpg';

  constructor() { }

  ngOnInit() {
  }

}
