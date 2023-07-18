import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyoneobservableComponent } from './studyoneobservable.component';

describe('StudyoneobservableComponent', () => {
  let component: StudyoneobservableComponent;
  let fixture: ComponentFixture<StudyoneobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyoneobservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyoneobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
