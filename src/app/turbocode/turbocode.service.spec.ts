import { TestBed } from '@angular/core/testing';

import { TurbocodeService } from './turbocode.service';

describe('TurbocodeService', () => {
  let service: TurbocodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurbocodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
