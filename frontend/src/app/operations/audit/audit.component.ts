import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  isLoading = true;
  listeClients: Client[];

  constructor(
    private cs: ClientService,
  ) { }

  ngOnInit() {
    this.cs.auditAgence().subscribe(
      clients => {
        this.listeClients = clients;
        this.isLoading = false;
      });
  }

}
