// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-echarts-dashboard';
// }

import { Component } from '@angular/core';
import { TitleDescriptionComponent } from './title-description/title-description.component';
import { EchartsVisualizationComponent } from './echarts-visualization/echarts-visualization.component';
import { InternsByLocationComponent } from './interns-by-location/interns-by-location.component';
import { InternsByCollegeComponent } from './interns-by-college/interns-by-college.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleDescriptionComponent, EchartsVisualizationComponent, InternsByLocationComponent, InternsByCollegeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-echarts-dashboard';
}