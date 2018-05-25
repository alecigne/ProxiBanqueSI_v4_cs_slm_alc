import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
  public montant: number = 0;

  constructor(private service: OperationsService, private formBuilder: FormBuilder, private router: Router, ) { }

  ngOnInit() {
  }


  buidlForm() {
    this.montantForm = this.formBuilder.group({
      montant: []
    })
  }


  public validation(): boolean {
    return this.compteDepart !== undefined && this.compteArrivee !== undefined && this.montant > 0;
  }

  faireVirement() {
    this.service.virement(this.compteDepart,this.compteArrivee, this.montant);
    alert('Le virement a été enregistré avec succès');
    this.router.navigate([`../operations`]);
  }

  goBack() {
    this.router.navigate(['operations']);
  }

}
