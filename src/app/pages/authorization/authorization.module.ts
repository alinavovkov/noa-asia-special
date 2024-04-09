import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';
// import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
   // ReactiveFormsModule
  ]
})
export class AuthorizationModule { }
