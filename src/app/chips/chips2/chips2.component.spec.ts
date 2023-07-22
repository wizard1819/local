import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chips2Component } from './chips2.component';

describe('Chips2Component', () => {
  let component: Chips2Component;
  let fixture: ComponentFixture<Chips2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chips2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chips2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
