import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visu-client',
  templateUrl: './visu-client.component.html',
})
export class VisuClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goBack() {
    this.router.navigate(['conseiller/:idConseiller/clients']);
  }
}
