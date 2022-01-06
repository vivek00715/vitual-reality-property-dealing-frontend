import { TestBed } from '@angular/core/testing';

import { PropertyCreationDataService } from './property-creation-data.service';

describe('PropertyCreationDataService', () => {
  let service: PropertyCreationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyCreationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
