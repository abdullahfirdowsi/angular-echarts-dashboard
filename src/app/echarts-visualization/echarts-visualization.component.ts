import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternDataService } from '../intern-data.service';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-echarts-visualization',
  template: `<div id="chart" style="height: 400px;"></div>`
})
export class EchartsVisualizationComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor(private internDataService: InternDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('chart'));
    this.loadChart();
  }

  loadChart() {
    const interns = this.internDataService.getInterns();
    const programmingLanguages = [...new Set(interns.map(intern => intern.programmingLanguage))];
    const languageCounts = programmingLanguages.map(lang => {
      return {
        name: lang,
        value: interns.filter(intern => intern.programmingLanguage === lang).length
      };
    });

    this.chart.setOption({
      title: {
        text: 'Programming Languages Distribution',
        top: '5%' 
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: '10%' 
      },
      series: [
        {
          name: 'Programming Languages',
          type: 'pie',
          radius: '50%',
          data: languageCounts,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }
}