import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsVisualizationComponent } from './echarts-visualization.component';

describe('EchartsVisualizationComponent', () => {
  let component: EchartsVisualizationComponent;
  let fixture: ComponentFixture<EchartsVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartsVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartsVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
