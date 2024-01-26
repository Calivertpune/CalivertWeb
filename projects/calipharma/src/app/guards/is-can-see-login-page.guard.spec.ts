import { TestBed } from '@angular/core/testing';

import { IsCanSeeLoginPageGuard } from './is-can-see-login-page.guard';

describe('IsCanSeeLoginPageGuard', () => {
  let guard: IsCanSeeLoginPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCanSeeLoginPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
