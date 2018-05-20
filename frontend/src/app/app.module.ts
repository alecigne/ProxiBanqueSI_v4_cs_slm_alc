import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ClientModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [
    { provide: 'BACKEND_URL', useValue:'http://localhost:8080/proxibanquesi/'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
