import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNameInputComponent } from './game-name-input.component';

describe('GameNameInputComponent', () => {
  let component: GameNameInputComponent;
  let fixture: ComponentFixture<GameNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
