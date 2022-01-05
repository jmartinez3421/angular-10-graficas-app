import { Component,  ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: 'red', hoverBackgroundColor: 'darkred' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', borderRadius: 15 },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Mi nombre' }
    ]
  };

  public randomize(): void {
    this.actualizar(0);
    this.actualizar(1);
    this.actualizar(2);

    this.chart?.update();
  }

  actualizar(index: number){
    this.barChartData.datasets[index].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

}
