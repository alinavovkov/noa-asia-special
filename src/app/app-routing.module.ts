import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {DeliveryComponent} from "./pages/delivery/delivery.component";
import {DonatingComponent} from "./pages/donating/donating.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourites', component: FavouriteComponent },
  {
    path: 'auth', component: AuthorizationComponent,
     loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'donating', component: DonatingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
//meeting with us
  {
    path: 'vacancies',
    loadChildren: () => import('./pages/vacancies/vacancies.module').then(m => m.VacanciesModule)
  },
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
  { path: 'product/:category', component: ProductsComponent },
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
