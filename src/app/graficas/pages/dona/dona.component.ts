import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: [ 350, 450, 100 ],
      backgroundColor: [
        '#FD790A',
        '#6409E3',
        '#16FA7D',
        '#E6B331',
        '#FD0AF6',
      ]
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';


}
