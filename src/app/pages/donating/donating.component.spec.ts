import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatingComponent } from './donating.component';

describe('DonatingComponent', () => {
  let component: DonatingComponent;
  let fixture: ComponentFixture<DonatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
