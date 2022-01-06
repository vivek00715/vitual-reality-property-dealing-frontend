import { TestBed } from '@angular/core/testing';

import { CityDetailService } from './city-detail.service';

describe('CityDetailService', () => {
  let service: CityDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
