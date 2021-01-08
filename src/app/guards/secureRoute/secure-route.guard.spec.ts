import { TestBed } from '@angular/core/testing';

import { SecureRouteGuard } from './secure-route.guard';

describe('SecureRouteGuard', () => {
  let guard: SecureRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecureRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
