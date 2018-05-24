import { Component, OnInit } from '@angular/core';
import { ChartObject, chart, PieChart } from 'highcharts'
import { ChartUtils } from './chartUtils';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';
import { PiePart } from './piePart';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit {

  private chart: ChartObject;
  total: number = 0;
  montantCCNegatif: number = 0;
  montantCENegatif: number = 0;
  montantCE: number = 0;
  montantCC: number = 0;

  pourCentCCNegatif: number;
  pourCentCENegatif: number;
  pourCentCE: number;
  pourCentCC: number;
  clients: Client[];

  pies: PiePart[];
  pie1: PiePart;
  pie2: PiePart;
  pie3: PiePart;
  pie4: PiePart;




  constructor(private clientService: ClientService, ) { }

  ngOnInit() {

    this.clientService.loadClients().subscribe(
      listeClients => {
        this.clients = listeClients;
        this.pies = this.calculRepartition();
        this.chart = chart('container', ChartUtils.configPieChart(
          [this.pie1, this.pie2, this.pie3, this.pie4]
        ));
      }
    )
    console.log(this.pies)


  }

  calculRepartition(): PiePart[] {

    for (let client of this.clients) {
      if (client.compteCourant) {
        if (client.compteCourant.solde >= 0) {
          this.total = this.total + client.compteCourant.solde;
          this.montantCC = this.montantCC + client.compteCourant.solde
        } else {
          this.total = this.total - client.compteCourant.solde;
          this.montantCCNegatif = this.montantCCNegatif - client.compteCourant.solde
        }
      }
      if (client.compteEpargne) {
        if (client.compteEpargne.solde >= 0) {
          this.total = this.total + client.compteEpargne.solde;
          this.montantCE = this.montantCE + client.compteEpargne.solde
        } else {
          this.total = this.total - client.compteEpargne.solde;
          this.montantCENegatif = this.montantCENegatif - client.compteEpargne.solde
        }
      }
    }

    this.pourCentCC = 100 * this.montantCC / this.total;
    this.pourCentCE = 100 * this.montantCE / this.total;
    this.pourCentCCNegatif = 100 * this.montantCCNegatif / this.total;
    this.pourCentCENegatif = 100 * this.montantCENegatif / this.total;
    this.pie1 = Object.assign({}, { y: this.pourCentCC, name: 'Compte Courant' });
    this.pie2 = Object.assign({}, { y: this.pourCentCE, name: 'Compte Epargne' });
    this.pie3 = Object.assign({}, { y: this.pourCentCCNegatif, name: 'Compte Courant déficitaire', sliced: true, selected: true });
    this.pie4 = Object.assign({}, { y: this.pourCentCENegatif, name: 'Compte Epargne déficitaire' });

    this.pies = [this.pie1, this.pie2, this.pie3, this.pie4]

    return this.pies;
  }

}
