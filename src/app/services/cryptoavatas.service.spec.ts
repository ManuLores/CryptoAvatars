import { TestBed } from '@angular/core/testing';

import { CryptoavatasService } from './cryptoavatas.service';

describe('CryptoavatasService', () => {
  let service: CryptoavatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoavatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
