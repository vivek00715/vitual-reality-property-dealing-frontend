import { TestBed } from '@angular/core/testing';

import { AuthNotRequiredGuard } from './auth-not-required.guard';

describe('AuthNotRequiredGuard', () => {
  let guard: AuthNotRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthNotRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
