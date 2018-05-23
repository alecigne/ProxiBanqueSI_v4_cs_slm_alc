import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
compteDepart:number;
compteArrivee:number;
montant:number=100;



  constructor(private service:OperationsService) { }

  ngOnInit() {
  }

  ReceptionMessage(typeCompte:string,numeroCompte:number){
    console.log(typeCompte, numeroCompte)
    if(typeCompte==='depart'){
      this.compteDepart=numeroCompte
    } 
    if(typeCompte==='arrivee'){
      this.compteArrivee=numeroCompte;
    } 
  }

  faireVirement(){
    this.service.virement(this.compteArrivee,this.compteDepart,this.montant);
    console.log('compte départ'+this.compteDepart+'compte arrivée'+this.compteArrivee+'montant'+this.montant)
  }

}
