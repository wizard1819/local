import { TestBed } from '@angular/core/testing';

import { ScrollbarService } from './scrollbar.service';

describe('ScrollbarService', () => {
  let service: ScrollbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
