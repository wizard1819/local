import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BslComponent } from './bsl.component';

describe('BslComponent', () => {
  let component: BslComponent;
  let fixture: ComponentFixture<BslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BslComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
