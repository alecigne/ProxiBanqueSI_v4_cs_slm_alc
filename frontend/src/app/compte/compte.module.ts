import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompteService } from './compte.service';
import { CompteCourantFormComponent } from './compte-courant-form/compte-courant-form.component';
import { ClientModule } from '../client/client.module';

import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../shared/field/field.component';
import { CompteEpargneFormComponent } from './compte-epargne-form/compte-epargne-form.component';


const routes: Routes = [
  { path: 'client/:idClient/nouveaucomptecourant', component: CompteCourantFormComponent },
  { path: 'client/:idClient/nouveaucompteepargne', component: CompteEpargneFormComponent },
  { path: 'editioncompte/:numeroCompte', component: CompteCourantFormComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CompteCourantFormComponent,
    CompteEpargneFormComponent,
  ],
  providers: [
    CompteService
  ]
})
export class CompteModule { }
