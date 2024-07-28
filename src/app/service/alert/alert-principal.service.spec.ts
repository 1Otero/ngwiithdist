import { TestBed } from '@angular/core/testing';

import { AlertPrincipalService } from './alert-principal.service';

describe('AlertPrincipalService', () => {
  let service: AlertPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
