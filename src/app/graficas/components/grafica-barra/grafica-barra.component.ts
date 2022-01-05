import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartDataset } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData!: ChartData<'bar'>;

  public randomize(): void {
    this.barChartData.datasets.forEach( dataSet => {
      dataSet.data.forEach( (data,i)=> {
        dataSet.data[i] = Math.round(Math.random() * 500);
      } )
    } );

    this.chart?.update();
  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions = {...this.barChartOptions, indexAxis: 'y'}
    }
  }

}
