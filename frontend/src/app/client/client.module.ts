import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientService } from './client.service';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';

import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../shared/field/field.component';

import { ChartDemoComponent } from '../demo/chart-demo/chart-demo.component';
import { VisuClientComponent } from '../visu-client/visu-client.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:clientId/editionclient', component: ClientFormComponent },
  { path: 'client/nouveauclient', component: ClientFormComponent },
  { path: 'demohighchart', component: ChartDemoComponent},
  { path: 'client/:clientId', component:VisuClientComponent},

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
    ClientListComponent,
    ClientFormComponent,
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
