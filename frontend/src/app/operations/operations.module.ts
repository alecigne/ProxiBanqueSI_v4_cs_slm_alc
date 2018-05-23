import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompteSelectionComponent } from './compte-selection/compte-selection.component';
import { TransfertComponent } from './transfert/transfert.component';
import { VirementComponent } from './virement/virement.component';
import { OperationsService } from './operations.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldComponent } from '../shared/field/field.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'virement', component: VirementComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    VirementComponent,
    CompteSelectionComponent,
    TransfertComponent, 
    CompteSelectionComponent,
 

  ],
  providers:[
    OperationsService
  ]
})
export class OperationsModule { }
