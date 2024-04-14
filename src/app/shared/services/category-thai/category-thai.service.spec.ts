import { TestBed } from '@angular/core/testing';

import { CategoryThaiService } from './category-thai.service';

describe('CategoryThaiService', () => {
  let service: CategoryThaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryThaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
