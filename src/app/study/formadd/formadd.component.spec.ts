import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaddComponent } from './formadd.component';

describe('FormaddComponent', () => {
  let component: FormaddComponent;
  let fixture: ComponentFixture<FormaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
