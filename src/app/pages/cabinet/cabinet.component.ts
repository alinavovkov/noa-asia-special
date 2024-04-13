import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from "../../shared/services/account/account.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss'
})
export class CabinetComponent implements OnInit {
  personalDataClicked: boolean = false;
  orderHistoryClicked: boolean = false;
  changePasswordClicked: boolean = false;
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }
  // Method to handle click event for personal data button
  handlePersonalDataClick() {
    this.personalDataClicked = true;
    this.orderHistoryClicked = false;
    this.changePasswordClicked = false;
  }

  // Method to handle click event for order history button
  handleOrderHistoryClick() {
    this.personalDataClicked = false;
    this.orderHistoryClicked = true;
    this.changePasswordClicked = false;
  }

  // Method to handle click event for change password button
  handleChangePasswordClick() {
    this.personalDataClicked = false;
    this.orderHistoryClicked = false;
    this.changePasswordClicked = true;
  }
  logOut(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
  }
}
