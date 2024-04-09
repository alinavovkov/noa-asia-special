import {Component, OnInit, Input} from '@angular/core';
import { TypeDeliveryDialogComponent } from '../type-delivery-dialog/type-delivery-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  @Input() selectedDeliveryType: string = ''; // Input property to receive the selected delivery type
  showFiller = false;
  private dialogOpened: boolean = false;

  constructor(
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    // this.openDialog();
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


}
