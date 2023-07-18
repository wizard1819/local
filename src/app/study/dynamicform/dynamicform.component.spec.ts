import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformComponent } from './dynamicform.component';

describe('DynamicformComponent', () => {
  let component: DynamicformComponent;
  let fixture: ComponentFixture<DynamicformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
