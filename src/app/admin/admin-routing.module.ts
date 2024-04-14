import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import {AdminFavouriteComponent} from "./admin-favourite/admin-favourite.component";
import {AdminProductsThaiComponent} from "./admin-products-thai/admin-products-thai.component";
import {AdminCatagoryThaiComponent} from "./admin-catagory-thai/admin-catagory-thai.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'category', component: AdminCategoryComponent },
      { path: 'category-thai', component: AdminCatagoryThaiComponent },
      { path: 'product', component: AdminProductComponent },
      { path: 'order', component: AdminOrderComponent },
      { path: 'favourite', component: AdminFavouriteComponent },
      { path: 'products-thai', component: AdminProductsThaiComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
