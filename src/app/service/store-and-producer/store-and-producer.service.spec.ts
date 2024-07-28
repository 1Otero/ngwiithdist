import { TestBed } from '@angular/core/testing';

import { StoreAndProducerService } from './store-and-producer.service';

describe('StoreAndProducerService', () => {
  let service: StoreAndProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreAndProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
