import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productThaiResolver } from './product-thai.resolver';

describe('productThaiResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productThaiResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
