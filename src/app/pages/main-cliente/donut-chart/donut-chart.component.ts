import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  chart: any;

  nomeLoja: string = 'Loja 1';
  pontosLoja: number = 100;

  ngOnInit() {
    this.chart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [0, 100],
            backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }
}
