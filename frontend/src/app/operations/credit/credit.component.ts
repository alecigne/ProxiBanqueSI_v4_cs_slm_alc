import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OperationsService } from "../operations.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html'
})
export class CreditComponent {
  mensualite: number = 0;
  creditForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private os: OperationsService,
    private router: Router) { }

  ngOnInit() {
    this.creditForm = this.fb.group({
      // Nombres décimaux positifs
      montant: ['', [Validators.required, Validators.pattern('^[0-9]+\\.?[0-9]*$')]],
      // Nombres entiers positifs
      duree: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      // Nombres décimaux positifs, max 100
      taux: ['', [Validators.required, Validators.max(100), Validators.pattern('^[0-9]+\\.?[0-9]*$')]]
    });
  }

  simulerCredit() {
    const montant = this.creditForm.get('montant').value;
    const duree = this.creditForm.get('duree').value;
    const taux = this.creditForm.get('taux').value;
    this.os.credit(montant, duree, taux).subscribe(mensualite => this.mensualite = mensualite);
  }

  goBack() {
    this.router.navigate(['operations']);
  }

}