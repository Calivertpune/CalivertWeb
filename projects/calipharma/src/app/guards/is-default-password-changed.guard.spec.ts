import { TestBed } from '@angular/core/testing';

import { IsDefaultPasswordChangedGuard } from './is-default-password-changed.guard';

describe('IsDefaultPasswordChangedGuard', () => {
  let guard: IsDefaultPasswordChangedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsDefaultPasswordChangedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
