import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselItemElement } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { AccueilComponent } from './accueil.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AccueilComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement
  ]
})
export class AccueilModule { }
