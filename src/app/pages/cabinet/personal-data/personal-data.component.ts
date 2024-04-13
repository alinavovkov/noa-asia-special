import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../../shared/services/account/account.service";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss'
})
export class PersonalDataComponent implements OnInit{
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }
  logOut(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
  }
}
