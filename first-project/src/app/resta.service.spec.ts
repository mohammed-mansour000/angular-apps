import { TestBed } from '@angular/core/testing';

import { RestaService } from './resta.service';

describe('RestaService', () => {
  let service: RestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
