import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsViewComponent } from './insights-view.component';

describe('InsightsViewComponent', () => {
  let component: InsightsViewComponent;
  let fixture: ComponentFixture<InsightsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
