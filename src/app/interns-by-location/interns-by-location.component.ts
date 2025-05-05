import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternDataService } from '../intern-data.service';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-interns-by-location',
  template: `<div id="locationChart" style="height: 400px;"></div>`
})
export class InternsByLocationComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor(private internDataService: InternDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('locationChart'));
    this.loadChart();
  }

  loadChart() {
    const interns = this.internDataService.getInterns();
    const locations = [...new Set(interns.map(intern => intern.location))];
    const locationCounts = locations.map(location => {
      return {
        name: location,
        value: interns.filter(intern => intern.location === location).length
      };
    });

    this.chart.setOption({
      title: {
        text: 'Interns Distribution by Working Locations 🌍',
        top: '5%' 
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: '15%' 
      },
      series: [
        {
          name: 'Locations',
          type: 'pie',
          radius: '50%',
          data: locationCounts,
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