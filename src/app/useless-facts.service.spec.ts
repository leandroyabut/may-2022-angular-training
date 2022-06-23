import { TestBed } from '@angular/core/testing';

import { UselessFactsService } from './useless-facts.service';

describe('UselessFactsService', () => {
  let service: UselessFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UselessFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
