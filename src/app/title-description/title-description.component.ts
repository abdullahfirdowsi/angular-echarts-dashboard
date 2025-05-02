import { Component } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.css']
})
export class TitleDescriptionComponent {
  title = 'iLink Digital Interns Dashboard';
  description = 'This dashboard displays information about the interns of iLink Digital - Batch 2025.';
}