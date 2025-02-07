import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)


@Component({
  selector: 'app-skills-graph',
  standalone:false,
  templateUrl: './skills-graph.component.html',
  styleUrl: './skills-graph.component.scss'
})
export class SkillsGraphComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.RenderChart();

  }
  RenderChart() {
    const labels = [".Net",".Net Core","CSharp","Ado.Net","OOPS","Angular","SQL"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Skills practiced for years',
        data: [10, 5, 10, 10, 10, 6, 10],//[.net,".Net Core","CSharp","Ado.Net","OOPS","Angular","SQL"]
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    const config = new Chart ("barchart", {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }
}
