import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chips3Component } from './chips3.component';

describe('Chips3Component', () => {
  let component: Chips3Component;
  let fixture: ComponentFixture<Chips3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chips3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chips3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
