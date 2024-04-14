import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationComponent } from './authorization.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ToastrModule} from "ngx-toastr";
import {Auth} from "@angular/fire/auth";
import {Firestore} from "@angular/fire/firestore";

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorizationComponent],
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
      ]

    })
    .compileComponents();
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
