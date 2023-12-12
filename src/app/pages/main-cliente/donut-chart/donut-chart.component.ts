import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {PontosService} from "../../../../services/pontos.service";
import {Carteira} from "../../../model/Carteira";

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  chart: any;

  @Input() carteirasCliente: Carteira[] = [];

  nomeLoja: string = '';
  pontosMax: number = 0;


  constructor(private pontosService: PontosService) {
  }


  ngOnInit() {
    setTimeout(() => {
      this.getMaisPontos();
      this.criarChart();
    }, 100);
  }

  private getMaisPontos() {
    this.carteirasCliente.forEach(carteira => {
      this.pontosMax = carteira.quantidadePontos > this.pontosMax ? carteira.quantidadePontos : this.pontosMax;
      this.nomeLoja = carteira.loja.nomeLoja;
    })
  }

  private criarChart() {
    this.chart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['Data1'],
        datasets: [
          {
            data: [this.pontosMax],
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
