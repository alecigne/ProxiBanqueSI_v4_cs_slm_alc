import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compte-selection',
  templateUrl: './compte-selection.component.html',
  styleUrls: ['./compte-selection.component.css']
})
export class CompteSelectionComponent implements OnInit {
  @Input() compte:string;
  

  constructor() { }

  ngOnInit() {
  }

}
