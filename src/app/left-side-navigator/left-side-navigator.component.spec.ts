import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNavigatorComponent } from './left-side-navigator.component';

describe('LeftSideNavigatorComponent', () => {
  let component: LeftSideNavigatorComponent;
  let fixture: ComponentFixture<LeftSideNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
