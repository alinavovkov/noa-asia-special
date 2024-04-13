import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../../interfaces/account/account.interface';
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {doc, docData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   //private baseUrl = 'http://localhost:3000';
  // private authUrl = `${this.baseUrl}/auth`;

  public isUserLogin$ = new Subject<boolean>();

  constructor(
    // private http: HttpClient,
    private auth: Auth,
    private afs: Firestore
  ) {}

  // login(credential: ILogin): Observable<any> {
  //   return this.http.get(`${this.authUrl}?email=${credential.email}&password=${credential.password}`)
  //     .pipe(
  //       catchError((error) => {
  //         // Handle error gracefully
  //         console.error('Login error:', error);
  //         return throwError('Failed to login. Please try again.');
  //       })
  //     );
  // }

  login(credentials: { email: string, password: string }): Promise<void> {
    return signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)
      .then((credential) => {
        this.isUserLogin$.next(true);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  async getCurrentUser(): Promise<any> {
    const user = await this.auth.currentUser;
    if (user) {
      return docData(doc(this.afs, 'users', user.uid)).toPromise();
    }
    return null;
  }
}
