import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { authGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourites', component: FavouriteComponent },
  {
    path: 'auth',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
