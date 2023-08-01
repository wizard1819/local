import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComponent } from './sb.component';

describe('SbComponent', () => {
  let component: SbComponent;
  let fixture: ComponentFixture<SbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
