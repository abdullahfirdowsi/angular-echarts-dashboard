import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternDataService } from '../intern-data.service';

@Component({
  selector: 'app-interns-by-programming-language',
  templateUrl: './interns-by-programming-language.component.html', 
  styleUrls: ['./interns-by-programming-language.component.css'] 
})
export class InternsByProgrammingLanguageComponent implements OnInit, AfterViewInit {
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
        text: '🎯 Programming Language Proficiency Among Interns'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: languageCounts.map(item => item.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Programming Languages',
          type: 'bar',
          data: languageCounts.map(item => item.value),
          label: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        }
      ]
    });
  }
}