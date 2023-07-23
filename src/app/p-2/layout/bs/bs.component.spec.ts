import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsComponent } from './bs.component';

describe('BsComponent', () => {
  let component: BsComponent;
  let fixture: ComponentFixture<BsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
