import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FieldComponent
  ],
  declarations: [
    FieldComponent,
  ]
})
export class SharedModule { }
