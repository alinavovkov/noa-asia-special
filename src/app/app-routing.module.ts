import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FavouriteComponent} from './pages/favourite/favourite.component';
import {authGuard} from './shared/guards/auth/auth.guard';
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {DeliveryComponent} from "./pages/delivery/delivery.component";
import {DonatingComponent} from "./pages/donating/donating.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductThaiComponent} from "./pages/product-thai/product-thai.component";
import {ProductInfoComponent} from "./pages/product-info/product-info.component";
import {ProductInfoResolver} from './shared/services/product/product-info.resolver';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {VacancyInfoComponent} from "./pages/vacancies/vacancy-info/vacancy-info.component";
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favourites', component: FavouriteComponent},
  {
    path: 'auth', component: AuthorizationComponent,
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {path: 'delivery', component: DeliveryComponent},
  {path: 'donating', component: DonatingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
//meeting with us
  {
    path: 'cabinet',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/cabinet/cabinet.module').then(m => m.CabinetModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path: 'product', component: ProductsComponent},

  {path: 'product/:category', component: ProductsComponent},
  {path: 'product-thai/:category', component: ProductThaiComponent},
  {path: 'product-thai', component: ProductThaiComponent},
  {
    path: 'product/:category/:id', component: ProductInfoComponent, resolve: {
      productInfo: ProductInfoResolver
    }
  },

  {path: 'checkout', component: CheckoutComponent},
  { path: 'vacancies', component: VacanciesComponent },

  {path: 'vacancy', component: VacancyInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    //scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
