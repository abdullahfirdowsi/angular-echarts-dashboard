import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternDataService } from '../intern-data.service';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-interns-by-college',
  template: `<div id="collegeChart" style="height: 400px;"></div>`
})
export class InternsByCollegeComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor(private internDataService: InternDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('collegeChart'));
    this.loadChart();
  }

  loadChart() {
    const interns = this.internDataService.getInterns();
    const colleges = [...new Set(interns.map(intern => intern.collegeName))];
    const collegeCounts = colleges.map(college => {
      return {
        name: college,
        value: interns.filter(intern => intern.collegeName === college).length
      };
    });

    this.chart.setOption({
      title: {
        text: 'Interns Distribution by Academic Institution 🎓',
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
          name: 'Colleges',
          type: 'pie',
          radius: '50%',
          data: collegeCounts,
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