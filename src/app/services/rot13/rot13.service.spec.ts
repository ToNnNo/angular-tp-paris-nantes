import { TestBed } from '@angular/core/testing';

import { Rot13Service } from './rot13.service';

describe('Rot13Service', () => {
  let service: Rot13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rot13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
