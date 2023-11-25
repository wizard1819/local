import { TestBed } from '@angular/core/testing';

import { TestandstudyService } from './testandstudy.service';

describe('TestandstudyService', () => {
  let service: TestandstudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestandstudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
