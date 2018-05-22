import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
})
export class FieldComponent implements OnInit {

  @Input() label: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
