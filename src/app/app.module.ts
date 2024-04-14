import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { TypeDeliveryDialogComponent } from './components/type-delivery-dialog/type-delivery-dialog.component';
import { ToastrModule} from "ngx-toastr";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getAuth, provideAuth} from '@angular/fire/auth';

import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DonatingComponent } from './pages/donating/donating.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthDialogComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FavouriteComponent,
    TypeDeliveryDialogComponent,
    DeliveryComponent,
    DonatingComponent,
    AboutComponent,
    ContactsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "noa-asia-special-3398c",
      "appId": "1:310215525481:web:84b516ee38c26cf3ba0ef8",
      "storageBucket": "noa-asia-special-3398c.appspot.com",
      "apiKey": "AIzaSyDeI5hoHbMK6nc80X8CoBK-g9QPto_0c5o",
      "authDomain": "noa-asia-special-3398c.firebaseapp.com",
      "messagingSenderId": "310215525481"
    })),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
