import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabinetComponent } from './cabinet.component';
import {RouterModule} from "@angular/router";

describe('CabinetComponent', () => {
  let component: CabinetComponent;
  let fixture: ComponentFixture<CabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(
          [{path: 'cabinet', component: CabinetComponent}]
        )
      ],
      declarations: [CabinetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
