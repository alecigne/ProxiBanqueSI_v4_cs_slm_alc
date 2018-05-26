import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html'
})
export class AuditComponent implements OnInit {

  isLoading = true;
  listeClients: Client[];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientService.auditAgence().subscribe(
      clients => {
        this.listeClients = clients;
        this.isLoading = false;
      });
  }

  goBack() {
    this.router.navigate(['operations']);
  }

}
