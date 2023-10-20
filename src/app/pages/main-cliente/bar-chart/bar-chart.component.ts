import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.chart = new Chart('bar', {
      type: 'bar',
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
