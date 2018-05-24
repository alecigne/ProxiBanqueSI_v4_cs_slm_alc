import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crediter-compte',
  templateUrl: './crediter-compte.component.html',
  styleUrls: ['./crediter-compte.component.css']
})
export class CrediterCompteComponent implements OnInit {

  montantForm: FormGroup;
  transfert: number;
  compteCredite: number;
  montant: number;

  constructor(private service: OperationsService, private formBuilder: FormBuilder, private router: Router) { }

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

  public validation(): boolean {
    return this.compteCredite !== undefined && this.montant > 0;
  }

  Crediter() {
    this.service.CrediterCompte(this.compteCredite, this.montant);
    alert('Le compte a été crédité avec succès');
    this.router.navigate([`../operations`]);
  }

  goBack() {
    this.router.navigate(['operations']);
  }



}
