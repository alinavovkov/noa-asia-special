import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsThaiComponent } from './admin-products-thai.component';

describe('AdminProductsThaiComponent', () => {
  let component: AdminProductsThaiComponent;
  let fixture: ComponentFixture<AdminProductsThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProductsThaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProductsThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
