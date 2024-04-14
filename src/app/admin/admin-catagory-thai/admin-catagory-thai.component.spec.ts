import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatagoryThaiComponent } from './admin-catagory-thai.component';

describe('AdminCatagoryThaiComponent', () => {
  let component: AdminCatagoryThaiComponent;
  let fixture: ComponentFixture<AdminCatagoryThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCatagoryThaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCatagoryThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
