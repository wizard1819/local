import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLoaderComponent } from './open-loader.component';

describe('OpenLoaderComponent', () => {
  let component: OpenLoaderComponent;
  let fixture: ComponentFixture<OpenLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
