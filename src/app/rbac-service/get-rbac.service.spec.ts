import { TestBed } from '@angular/core/testing';

import { GetRbacService } from './get-rbac.service';

describe('GetRbacService', () => {
  let service: GetRbacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRbacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
