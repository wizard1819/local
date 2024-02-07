import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadXmlComponent } from './read-xml.component';

describe('ReadXmlComponent', () => {
  let component: ReadXmlComponent;
  let fixture: ComponentFixture<ReadXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadXmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
