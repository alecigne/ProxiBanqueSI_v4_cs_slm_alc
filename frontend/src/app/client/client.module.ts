import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field/field.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:clientId', component: ClientFormComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientListComponent,
    ClientFormComponent,
    FieldComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
