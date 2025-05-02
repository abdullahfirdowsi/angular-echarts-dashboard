import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsByCollegeComponent } from './interns-by-college.component';

describe('InternsByCollegeComponent', () => {
  let component: InternsByCollegeComponent;
  let fixture: ComponentFixture<InternsByCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternsByCollegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsByCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
