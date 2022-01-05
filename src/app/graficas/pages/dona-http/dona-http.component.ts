import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements AfterViewInit {

  dataDona: number[] = [];
  doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: this.dataDona,
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

  constructor(private graficasService: GraficasService) { }

  ngAfterViewInit(): void {
    // this.graficasService.obtenerDatos()
    //   .subscribe(resp => {
    //     const labels = Object.keys(resp);
    //     const values: number[] = Object.values(resp);

    //     labels.forEach( key => {
    //       this.doughnutChartLabels.push(key);
    //     } );

    //     values.forEach( value => {
    //       this.dataDona.push(value);
    //     } )

    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        labels.forEach(key => {
          this.doughnutChartLabels.push(key);
        });

        values.forEach(value => {
          this.dataDona.push(value);
        })
      })
  }

}
