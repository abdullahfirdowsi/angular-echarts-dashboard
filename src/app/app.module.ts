import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleDescriptionComponent } from './title-description/title-description.component';
// import { EchartsVisualizationComponent } from './echarts-visualization/echarts-visualization.component';
import { InternDataService } from './intern-data.service';
import { InternsByLocationComponent } from './interns-by-location/interns-by-location.component';
import { InternsByCollegeComponent } from './interns-by-college/interns-by-college.component';
import { InternsByAllocatedBUComponent } from './interns-by-allocated-bu/interns-by-allocated-bu.component';
import { InternsByProgrammingLanguageComponent } from './interns-by-programming-language/interns-by-programming-language.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleDescriptionComponent,
    InternsByProgrammingLanguageComponent,
    InternsByLocationComponent,
    InternsByCollegeComponent,
    InternsByAllocatedBUComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InternDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }