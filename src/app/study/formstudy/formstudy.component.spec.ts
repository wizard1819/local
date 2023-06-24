import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstudyComponent } from './formstudy.component';

describe('FormstudyComponent', () => {
  let component: FormstudyComponent;
  let fixture: ComponentFixture<FormstudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
