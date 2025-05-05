import { Component } from '@angular/core';
import { TitleDescriptionComponent } from './title-description/title-description.component';
import { InternsByLocationComponent } from './interns-by-location/interns-by-location.component';
import { InternsByCollegeComponent } from './interns-by-college/interns-by-college.component';
import { InternsByAllocatedBUComponent } from './interns-by-allocated-bu/interns-by-allocated-bu.component';
import { InternsByProgrammingLanguageComponent } from './interns-by-programming-language/interns-by-programming-language.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleDescriptionComponent, 
            InternsByProgrammingLanguageComponent, 
            InternsByLocationComponent, 
            InternsByCollegeComponent, 
            InternsByAllocatedBUComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-echarts-dashboard';
}