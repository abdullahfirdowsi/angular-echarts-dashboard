import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsByLocationComponent } from './interns-by-location.component';

describe('InternsByLocationComponent', () => {
  let component: InternsByLocationComponent;
  let fixture: ComponentFixture<InternsByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternsByLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
