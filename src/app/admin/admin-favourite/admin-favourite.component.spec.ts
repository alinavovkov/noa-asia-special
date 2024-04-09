import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFavouriteComponent } from './admin-favourite.component';

describe('AdminFavouriteComponent', () => {
  let component: AdminFavouriteComponent;
  let fixture: ComponentFixture<AdminFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFavouriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
