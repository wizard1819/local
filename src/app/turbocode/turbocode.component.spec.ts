import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbocodeComponent } from './turbocode.component';

describe('TurbocodeComponent', () => {
  let component: TurbocodeComponent;
  let fixture: ComponentFixture<TurbocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurbocodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurbocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
