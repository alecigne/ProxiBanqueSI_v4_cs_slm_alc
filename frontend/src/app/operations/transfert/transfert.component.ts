import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html'
})
export class TransfertComponent implements OnInit {

  @Output() montant: EventEmitter<number> = new EventEmitter<number>();
  montantForm: FormGroup;
  transfert: number;
  formControle: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  buidlForm() {
    this.montantForm = this.formBuilder.group({
      montant: []
    })
  }

  getMontant() {
    this.transfert = this.montantForm.value.montant;
    this.montant.emit(this.transfert);
  }

}
