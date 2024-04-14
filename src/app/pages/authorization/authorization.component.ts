import {Component, OnInit, OnDestroy} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {doc, docData, Firestore, setDoc} from '@angular/fire/firestore';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AccountService} from '../../shared/services/account/account.service';
import {ROLE} from '../../shared/constants/role.constante';
export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  public authForm!: FormGroup;
  public loginSubscription!: Subscription;
  public isLogin = false;
  private registerData!: IRegister;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private auth: Auth,
    private afs: Firestore,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.initAuthForm();
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  // registerUser(): void {
  //   const { email, password } = this.authForm.value;
  //   this.registerData = this.authForm.value;
  //   this.emailSignUp(email, password).then(() => {
  //     this.toastr.success('User successfully created');
  //     this.isLogin = !this.isLogin;
  //     this.authForm.reset();
  //   }).catch(e => {
  //     this.toastr.error(e.message);
  //   })
  // }
  //
  // async emailSignUp(email: string, password: string): Promise<any> {
  //   const credential = await createUserWithEmailAndPassword(this.auth, email, password);
  //   const user = {
  //     email: credential.user.email,
  //     firstName: 'Alina',
  //     lastName: 'Vovkov',
  //     role: 'ADMIN'
  //   };
  //   setDoc(doc(this.afs, 'users', credential.user.uid), user);
  // }

  loginAdmin(): void {
    const { email, password } = this.authForm.value;
    this.login(email, password).then(() => {
      this.toastr.success('Admin successfully login');
      console.log(password);

    }).catch(e => {
      this.toastr.error(e.message);
    })
  }

  async login(email: string, password: string): Promise<void> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    docData(doc(this.afs, 'users', credential.user.uid)).subscribe(user => {
      const currentUser = { ...user, uid: credential.user.uid };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      if (user && user['role'] === ROLE.ADMIN) {
        this.router.navigate(['/admin']);
        this.accountService.isUserLogin$.next(true);
      }
    }, (e) => {
      console.log('error', e);
    })
  }
}
