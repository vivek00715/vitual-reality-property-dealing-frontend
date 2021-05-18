import { TestBed } from '@angular/core/testing';

import { AdminRequiredGuard } from './admin-required.guard';

describe('AdminRequiredGuard', () => {
  let guard: AdminRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
