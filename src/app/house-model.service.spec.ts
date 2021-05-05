import { TestBed } from '@angular/core/testing';

import { HouseModelService } from './house-model.service';

describe('HouseModelService', () => {
  let service: HouseModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
