import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompteService } from './compte.service';
import { CompteFormComponent } from './compte-form/compte-form.component';
import { ClientModule } from '../client/client.module';

import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../shared/field/field.component';


const routes: Routes = [
  { path: 'nouveaucompte', component: CompteFormComponent },
  { path: 'editioncompte/:numeroCompte', component: CompteFormComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CompteFormComponent,
  ],
  providers: [
    CompteService
  ]
})
export class CompteModule { }
