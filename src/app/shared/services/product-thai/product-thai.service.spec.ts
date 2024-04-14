import { TestBed } from '@angular/core/testing';

import { ProductThaiService } from './product-thai.service';

describe('ProductThaiService', () => {
  let service: ProductThaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductThaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
