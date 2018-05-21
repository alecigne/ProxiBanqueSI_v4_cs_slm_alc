import { PiePart } from "./piePart";
import { ChartOptions } from "highcharts";

export class ChartUtils {

  private static PIE_CHART_CONFIG_BASE = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
  }


  public static configPieChart(parts: PiePart[]){
    return Object.assign(
      {},
      ChartUtils.PIE_CHART_CONFIG_BASE,
      {
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: parts
        }]
      });
  }















}