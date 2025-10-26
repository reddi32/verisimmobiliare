import { TestBed } from '@angular/core/testing';

import { AffittiService } from './affitti.service';

describe('AffittiService', () => {
  let service: AffittiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffittiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
