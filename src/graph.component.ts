import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() data;
  origin;

  //Variables from the option component
  filterBy = "Tienda";
  startDate = "01/05/2018";
  endDate = "01/06/2018";
  verifiers = [123, 456, 789];

  chart: Chart;
  dateSelected;
  filterType;
  sectionName;
  //nombre del elemento graficado Tienda o verificador
  chartAxeYLabel  = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábados", "Domingo"]
  //Datos a graficar
  ChartDataScan   = [2257, 2276, 130, 174, 724, 1180, 1409];
  legendConfChart = {
                      display: false,
                    };
  axeX = "Días de la semana";


  constructor() {
    
   }

  ngOnInit() {
    this.origin = this.data;
    console.log("origin: "+this.origin);
    Chart.defaults.global.defaultFontFamily = '"Bogle-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif';
    Chart.defaults.global.defaultFontSize = 12;

    this.dateSelected=false;
    this.getSectionName();
    this.getFilterType();
    this.chart = new Chart('chart', {
      type: this.getChartType(),

      // The data for our dataset
      data: {
        labels: this.chartAxeYLabel,
        datasets: [
          {
            fill: true,
            label: "Tienda",
            //data: this.ChartDataScan,
            backgroundColor : "rgba(0,125,198,0.3)",
            borderColor : "rgba(0,125,198,1)",
            pointBackgroundColor : "rgba(0,125,198,1)",
            pointBorderColor : "rgba(0,125,198,1)",
            borderWidth : 1
          }
        ]
      },

      // Configuration options go here
      options: {
        legend: this.legendConfChart,
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: '#EDEDED'
            },
            scaleLabel: {
              display: true,
              labelString: this.axeX
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: '#EDEDED',
            },
            scaleLabel: {
              display: true,
              labelString: 'Frecuencia'
            }
          }]
        }
      }
    });

  }

  getSectionName() {
    switch(this.origin)
    {
      case "verificadores":
        this.sectionName = "Uso de Verificadores";
        break;
      case "nof":
        this.sectionName = "Artículos no encontrados";
        break;
      case "articulos":
        this.sectionName = "Artículos";
        break;
      case "departamentos":
        this.sectionName = "Departamentos";
        break;
    }
  }

  getFilterType() {
    this.filterType = this.filterBy === "Tienda" ? "Por Tienda" : "Por Verificador";
  }

  getChartType() {
    return 'line';
  }


}
