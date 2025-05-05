import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { InternsService } from '../intern-data.service'; 
import { Intern } from '../intern.model'; 

@Component({
  selector: 'app-interns-by-programming-language',
  standalone: true,
  templateUrl: './interns-by-programming-language.component.html',
  styleUrls: ['./interns-by-programming-language.component.css']
})
export class InternsByProgrammingLanguageComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor(private internsService: InternsService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('chart'));
    this.loadChart();
  }

  loadChart() {
    // Fetch data from the backend API
    this.internsService.getInterns().subscribe(
      (interns: Intern[]) => {
        const programmingLanguages = [...new Set(interns.map(intern => intern.programmingLanguage))];
        const languageCounts = programmingLanguages.map(lang => {
          return {
            name: lang,
            value: interns.filter(intern => intern.programmingLanguage === lang).length
          };
        });

        // Set chart options with the fetched data
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
      },
      error => {
        console.error('Error fetching interns data:', error);
      }
    );
  }
}

// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as echarts from 'echarts';



// @Component({
//   selector: 'app-interns-by-programming-language',
//   templateUrl: './interns-by-programming-language.component.html', 
//   styleUrls: ['./interns-by-programming-language.component.css'] 
// })
// export class InternsByProgrammingLanguageComponent implements OnInit, AfterViewInit {
//   chart: any;

//   constructor(private internDataService: InternDataService) {}

//   ngOnInit() {}

//   ngAfterViewInit() {
//     this.chart = echarts.init(document.getElementById('chart'));
//     this.loadChart();
//   }

//   loadChart() {
//     const interns = this.internDataService.getInterns();
//     const programmingLanguages = [...new Set(interns.map(intern => intern.programmingLanguage))];
//     const languageCounts = programmingLanguages.map(lang => {
//       return {
//         name: lang,
//         value: interns.filter(intern => intern.programmingLanguage === lang).length
//       };
//     });

//     this.chart.setOption({
//       title: {
//         text: '🎯 Programming Language Proficiency Among Interns'
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow'
//         }
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },
//       xAxis: {
//         type: 'category',
//         data: languageCounts.map(item => item.name)
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: 'Programming Languages',
//           type: 'bar',
//           data: languageCounts.map(item => item.value),
//           label: {
//             show: true,
//             position: 'top',
//             formatter: '{c}'
//           }
//         }
//       ]
//     });
//   }
// }