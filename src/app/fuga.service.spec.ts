import { TestBed } from '@angular/core/testing';

import { FugaService } from './fuga.service';

describe('FugaService', () => {
  let service: FugaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FugaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
