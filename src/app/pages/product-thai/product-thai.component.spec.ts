import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThaiComponent } from './product-thai.component';

describe('ProductThaiComponent', () => {
  let component: ProductThaiComponent;
  let fixture: ComponentFixture<ProductThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductThaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
