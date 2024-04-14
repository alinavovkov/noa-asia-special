import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import {RouterModule} from "@angular/router";
import {AdminFavouriteComponent} from "./admin-favourite/admin-favourite.component";
import { AdminProductsThaiComponent } from './admin-products-thai/admin-products-thai.component';
import { AdminCatagoryThaiComponent } from './admin-catagory-thai/admin-catagory-thai.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminOrderComponent,
    AdminProductsThaiComponent,
    AdminCatagoryThaiComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AdminModule { }
