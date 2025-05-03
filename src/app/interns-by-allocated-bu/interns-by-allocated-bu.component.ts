import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternDataService } from '../intern-data.service';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-interns-by-allocated-bu',
  template: `<div id="scatterChart" style="height: 400px;"></div>`
})
export class InternsByAllocatedBUComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor(private internDataService: InternDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('scatterChart'));
    this.loadChart();
  }

  loadChart() {
    const interns = this.internDataService.getInterns();
    // const buLocationCounts = {};
    let buLocationCounts: { [key: string]: number } = {};

    interns.forEach(intern => {
      const key = `${intern.allocatedBU}-${intern.location}`;
      if (!buLocationCounts[key]) {
        buLocationCounts[key] = 0;
      }
      buLocationCounts[key]++;
    });

    const data = Object.keys(buLocationCounts).map(key => {
      const [bu, location] = key.split('-');
      return {
        value: [bu, location, buLocationCounts[key]],
        name: `${bu} - ${location}`
      };
    });

    this.chart.setOption({
      title: {
        text: 'Distribution of Interns by Business Unit 🏢 and Location 🌍'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}'
      },
      xAxis: {
        type: 'category',
        data: [...new Set(interns.map(intern => intern.allocatedBU))]
      },
      yAxis: {
        type: 'category',
        data: [...new Set(interns.map(intern => intern.location))]
      },
      // visualMap: {
      //   type: 'continuous',
      //   calculable: true,
      //   orient: 'horizontal',
      //   left: 'center',
      //   bottom: '10%',
      //   text: ['High', 'Low'],
      //   inRange: {
      //     color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      //   }
      // },
      series: [
        {
          name: 'Interns',
          type: 'scatter',
          data: data,
          symbolSize: function (data: any) {
            return Math.sqrt(data[2]) * 5; // Size based on count
          },
          label: {
            show: true,
            formatter: '{c}',
            position: 'top'
          },
          emphasis: {
            focus: 'self'
          }
        }
      ]
    });
  }
}