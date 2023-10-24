import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunaComponent } from './guna.component';

describe('GunaComponent', () => {
  let component: GunaComponent;
  let fixture: ComponentFixture<GunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
