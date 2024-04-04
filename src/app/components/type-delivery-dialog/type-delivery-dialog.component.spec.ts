import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeliveryDialogComponent } from './type-delivery-dialog.component';

describe('TypeDeliveryDialogComponent', () => {
  let component: TypeDeliveryDialogComponent;
  let fixture: ComponentFixture<TypeDeliveryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeDeliveryDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeDeliveryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
