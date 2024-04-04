import {Component, OnInit} from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-type-delivery-dialog',
  templateUrl: './type-delivery-dialog.component.html',
  styleUrl: './type-delivery-dialog.component.scss'
})
export class TypeDeliveryDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TypeDeliveryDialogComponent>
    // private auth: Auth,
   // private afs: Firestore,
   // private router: Router,
  //  private accountService: AccountService,
  //  private toastr: ToastrService,
  //  private fb: FormBuilder,
  //  private dialogRef: MatDialogRef<AuthDialogComponent>
  ) { }

  ngOnInit(): void {
   // this.initLoginForm();
   // this.initRegisterForm();
  }
}
