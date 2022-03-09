import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRatingComponent } from './set-rating.component';

describe('SetRatingComponent', () => {
  let component: SetRatingComponent;
  let fixture: ComponentFixture<SetRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
