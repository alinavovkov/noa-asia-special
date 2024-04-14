import {Component, OnInit, Input, Inject} from '@angular/core';
import { TypeDeliveryDialogComponent } from '../type-delivery-dialog/type-delivery-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {ROLE} from "../../shared/constants/role.constante";
import {AccountService} from "../../shared/services/account/account.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() selectedDeliveryType: string = '';
//  showFiller = false;
  private dialogOpened: boolean = false;
   public isMenuActive: boolean = false;
  public loginPage = '';
  public isLogin = false;
  public loginUrl = '';

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
     this.openDialog();
    this.checkUserLogin();
    this.checkUpdatesUserLogin();
  }
  openDialog(): void {
    this.dialog.open(TypeDeliveryDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'type-delivery-dialog',
      autoFocus: false,
      data: { selectedDeliveryType: this.selectedDeliveryType },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result) {
        this.selectedDeliveryType = result; // Update selected delivery type after dialog is closed
      }
    });
  }

  openLoginDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false,
      data: { },
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);

    })
  }
  checkUserLogin(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if (currentUser && currentUser.role === ROLE.ADMIN) {
      this.isLogin = true;
      this.loginUrl = 'admin';
      this.loginPage = 'Admin';
    } else if (currentUser && currentUser.role === ROLE.USER) {
      this.isLogin = true;
      this.loginUrl = 'cabinet';
      this.loginPage = 'Cabinet';
    } else {
      this.isLogin = false;
      this.loginUrl = '';
      this.loginPage = '';
    }
  }


  checkUpdatesUserLogin(): void {
    this.accountService.isUserLogin$.subscribe(() => {
      this.checkUserLogin();
    })
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}

