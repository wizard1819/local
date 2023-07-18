import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysubjectComponent } from './studysubject.component';

describe('StudysubjectComponent', () => {
  let component: StudysubjectComponent;
  let fixture: ComponentFixture<StudysubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudysubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudysubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
