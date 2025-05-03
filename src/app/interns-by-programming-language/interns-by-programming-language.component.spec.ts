import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsByProgrammingLanguageComponent } from './interns-by-programming-language.component';

describe('InternsByProgrammingLanguageComponent', () => {
  let component: InternsByProgrammingLanguageComponent;
  let fixture: ComponentFixture<InternsByProgrammingLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternsByProgrammingLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsByProgrammingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
