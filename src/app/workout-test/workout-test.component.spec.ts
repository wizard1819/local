import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTestComponent } from './workout-test.component';

describe('WorkoutTestComponent', () => {
  let component: WorkoutTestComponent;
  let fixture: ComponentFixture<WorkoutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
