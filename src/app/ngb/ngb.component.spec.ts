import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbComponent } from './ngb.component';

describe('NgbComponent', () => {
  let component: NgbComponent;
  let fixture: ComponentFixture<NgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
