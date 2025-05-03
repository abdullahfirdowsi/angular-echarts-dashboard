import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsByAllocatedBuComponent } from './interns-by-allocated-bu.component';

describe('InternsByAllocatedBuComponent', () => {
  let component: InternsByAllocatedBuComponent;
  let fixture: ComponentFixture<InternsByAllocatedBuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternsByAllocatedBuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsByAllocatedBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
