import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesingRxjsComponent } from './tesing-rxjs.component';

describe('TesingRxjsComponent', () => {
  let component: TesingRxjsComponent;
  let fixture: ComponentFixture<TesingRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesingRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesingRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
