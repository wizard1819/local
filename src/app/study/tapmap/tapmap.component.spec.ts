import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapmapComponent } from './tapmap.component';

describe('TapmapComponent', () => {
  let component: TapmapComponent;
  let fixture: ComponentFixture<TapmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
