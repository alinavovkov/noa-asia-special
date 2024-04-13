import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {SharedModule} from "../../shared/shared.module";
import {CabinetRoutingModule} from "./cabinet-routing.module";
import {CabinetComponent} from "./cabinet.component";



@NgModule({
  declarations: [
    CabinetComponent,
    PersonalDataComponent,
    OrderHistoryComponent,
    FavouritesComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CabinetRoutingModule
  ]
})
export class CabinetModule { }
