import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: '', component: ClientListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ClientListComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
