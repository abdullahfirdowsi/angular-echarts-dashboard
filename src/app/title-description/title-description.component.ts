import { Component, OnInit } from '@angular/core';
import { InternsService } from '../intern-data.service'; 
import { Intern } from '../intern.model'; 

@Component({
  selector: 'app-title-description',
  standalone: true,
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.css']
})
export class TitleDescriptionComponent implements OnInit {
  title = 'iLink Digital Interns Dashboard';
  description = 'This dashboard displays information about the interns of iLink Digital - Batch 2025.';
  // totalInterns!: number;
  // locations!: string[];
  // colleges!: string[];
  totalInterns: number = 0; // Initialize with 0
  locations: string[] = []; // Initialize with an empty array
  colleges: string[] = []; // Initialize with an empty array


  constructor(private internsService: InternsService) {}

  ngOnInit() {
    // Fetch data from the backend API
    this.internsService.getInterns().subscribe(
      (interns: Intern[]) => {
        this.totalInterns = interns.length;
        this.locations = [...new Set(interns.map(intern => intern.location))];
        this.colleges = [...new Set(interns.map(intern => intern.collegeName))];
      },
      (error: any) => {
        console.error('Error fetching interns data:', error);
      }
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { InternDataService } from '../intern-data.service';
// import { Intern } from '../intern.model';

// @Component({
//   selector: 'app-title-description',
//   templateUrl: './title-description.component.html',
//   styleUrls: ['./title-description.component.css']
// })
// export class TitleDescriptionComponent implements OnInit {
//   title = 'iLink Digital Interns Dashboard';
//   description = 'This dashboard displays information about the interns of iLink Digital - Batch 2025.';
//   // description = `This dashboard provides an overview of the interns batch 2025, showcasing their distribution based on various criteria, such as location, college, and business unit allocation.<br>
//               //  It provides actionable insights through interactive charts and visualizations.`;
//   totalInterns!: number;
//   locations!: string[];
//   colleges!: string[];

//   constructor(private internDataService: InternDataService) {}

//   ngOnInit() {
//     const interns = this.internDataService.getInterns();
//     this.totalInterns = interns.length;
//     this.locations = [...new Set(interns.map(intern => intern.location))];
//     this.colleges = [...new Set(interns.map(intern => intern.collegeName))];
//   }
// }