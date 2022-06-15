import { TestBed } from '@angular/core/testing';

import { BookcontributionserviceService } from './bookcontributionservice.service';

describe('BookcontributionserviceService', () => {
  let service: BookcontributionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcontributionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
