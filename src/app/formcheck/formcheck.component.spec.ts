import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcheckComponent } from './formcheck.component';

describe('FormcheckComponent', () => {
  let component: FormcheckComponent;
  let fixture: ComponentFixture<FormcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
