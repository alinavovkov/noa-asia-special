import {Component, OnInit} from '@angular/core';
import { TypeDeliveryDialogComponent } from '../type-delivery-dialog/type-delivery-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(TypeDeliveryDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'type-delivery-dialog',
      autoFocus: false
    }).afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
