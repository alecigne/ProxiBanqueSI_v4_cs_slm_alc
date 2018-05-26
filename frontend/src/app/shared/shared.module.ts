import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FieldComponent,
    LoadingComponent
  ],
  declarations: [
    FieldComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
