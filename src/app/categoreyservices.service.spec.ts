import { TestBed } from '@angular/core/testing';

import { CategoreyService } from './categoreyservices.service';

describe('CategoreyservicesService', () => {
  let service: CategoreyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoreyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
