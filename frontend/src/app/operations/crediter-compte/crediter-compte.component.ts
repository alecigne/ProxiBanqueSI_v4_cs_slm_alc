import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crediter-compte',
  templateUrl: './crediter-compte.component.html',
  styleUrls: ['./crediter-compte.component.css']
})
export class CrediterCompteComponent implements OnInit {

  montantForm: FormGroup;
  transfert:number;
  compteCredite:number;
  montant:number;

  constructor(private service: OperationsService, private formBuilder:FormBuilder,) { }

  ngOnInit() {
  }

  buidlForm() {
    this.montantForm = this.formBuilder.group({
      montant: []
    })
  }

  // getMontant() {
  //   this.transfert = this.montantForm.value.montant;
  //   //this.montant.emit(this.transfert);
  // }

public validation():boolean {
 return this.compteCredite!==undefined&&this.montant>0;
}

Crediter(){
  this.service.CrediterCompte(this.compteCredite,this.montant)
  console.log(this.compteCredite+' , '+this.montant)
}





}
