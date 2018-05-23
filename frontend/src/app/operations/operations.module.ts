import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompteSelectionComponent } from './compte-selection/compte-selection.component';
import { TransfertComponent } from './transfert/transfert.component';
import { VirementComponent } from './virement/virement.component';

const routes: Routes = [
  { path: 'virement', component: VirementComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    VirementComponent,
    CompteSelectionComponent,
    TransfertComponent, 
    CompteSelectionComponent
  ]
})
export class OperationsModule { }
