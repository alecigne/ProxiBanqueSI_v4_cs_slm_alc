import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompteService } from './compte.service';
import { CompteCourantFormComponent } from './compte-courant-form/compte-courant-form.component';
import { CompteEpargneFormComponent } from './compte-epargne-form/compte-epargne-form.component';
import { ClientModule } from '../client/client.module';

import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../shared/field/field.component';



const routes: Routes = [
  { path: 'conseiller/:idConseiller/client/:idClient/editioncomptecourant/:numCompte', component: CompteCourantFormComponent },
  { path: 'conseiller/:idConseiller/client/:idClient/editioncompteepargne/:numCompte', component: CompteEpargneFormComponent },
  { path: 'conseiller/:idConseiller/client/:idClient/nouveaucomptecourant', component: CompteCourantFormComponent },
  { path: 'conseiller/:idConseiller/client/:idClient/nouveaucompteepargne', component: CompteEpargneFormComponent }
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
    CompteEpargneFormComponent
  ],
  providers: [
    CompteService
  ]
})
export class CompteModule { }
