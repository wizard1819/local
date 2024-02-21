import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderUlpoadComponent } from './folder-ulpoad.component';

describe('FolderUlpoadComponent', () => {
  let component: FolderUlpoadComponent;
  let fixture: ComponentFixture<FolderUlpoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderUlpoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderUlpoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
