import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import {DeliveryComponent} from "../../pages/delivery/delivery.component";

@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HeaderModule { }
