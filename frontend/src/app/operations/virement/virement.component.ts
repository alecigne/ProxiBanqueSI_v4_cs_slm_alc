import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

  montantForm: FormGroup;
  transfert: number;
  formControle: FormControl;
  compteDepart: number;
  compteArrivee: number;
 public montant: number=0;

  constructor(private service: OperationsService, private formBuilder:FormBuilder,) { }

  ngOnInit() {
  }

  // ReceptionMessage(typeCompte: string, numeroCompte: number) {
  //   console.log(typeCompte, numeroCompte)
  //   if (typeCompte === 'depart') {
  //     this.compteDepart = numeroCompte
  //   }
  //   if (typeCompte === 'arrivee') {
  //     this.compteArrivee = numeroCompte;
  //   }
  // }


  buidlForm() {
    this.montantForm = this.formBuilder.group({
      montant: []
    })
  }

  getMontant() {
    this.transfert = this.montantForm.value.montant;
    //this.montant.emit(this.transfert);
  }

public validation():boolean {
 return this.compteDepart!==undefined && this.compteArrivee!==undefined&&this.montant>0;
}

  faireVirement() {
    // this.transfert = this.montant;
    this.service.virement(this.compteArrivee, this.compteDepart, this.montant);
    console.log('compte départ' + this.compteDepart + 'compte arrivée' + this.compteArrivee + 'montant' + this.montant)
  }


}
