import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work1testComponent } from './work1test.component';

describe('Work1testComponent', () => {
  let component: Work1testComponent;
  let fixture: ComponentFixture<Work1testComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Work1testComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Work1testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
