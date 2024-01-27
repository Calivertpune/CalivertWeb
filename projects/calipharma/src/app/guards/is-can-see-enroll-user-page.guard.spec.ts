import { TestBed } from '@angular/core/testing';

import { IsCanSeeEnrollUserPageGuard } from './is-can-see-enroll-user-page.guard';

describe('IsCanSeeEnrollUserPageGuard', () => {
  let guard: IsCanSeeEnrollUserPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCanSeeEnrollUserPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
