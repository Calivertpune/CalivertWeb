import { TestBed } from '@angular/core/testing';

import { IsCanSeeDefaultPasswordPageGuard } from './is-can-see-default-password-page.guard';

describe('IsCanSeeDefaultPasswordPageGuard', () => {
  let guard: IsCanSeeDefaultPasswordPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCanSeeDefaultPasswordPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
