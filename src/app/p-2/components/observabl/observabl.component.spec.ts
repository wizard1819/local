import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablComponent } from './observabl.component';

describe('ObservablComponent', () => {
  let component: ObservablComponent;
  let fixture: ComponentFixture<ObservablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
