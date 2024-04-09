import {Component, OnInit} from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-type-delivery-dialog',
  templateUrl: './type-delivery-dialog.component.html',
  styleUrl: './type-delivery-dialog.component.scss'
})
export class TypeDeliveryDialogComponent implements OnInit {

  ngOnInit(): void {
   // this.initLoginForm();
   // this.initRegisterForm();
  }

   // private dialogRef: MatDialogRef<TypeDeliveryDialogComponent>
  deliveryForm: FormGroup;
  selectedDeliveryType: string = ''; // Initialize selected delivery type

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TypeDeliveryDialogComponent>
    ) {
    this.deliveryForm = this.formBuilder.group({
      deliveryType: [''] // FormControl for the delivery type
    });
  }

  // Method to handle selection of delivery type

  selectDeliveryType(deliveryType: string) {
    this.selectedDeliveryType = deliveryType;
    // Close the dialog window after choosing the type
    this.dialogRef.close(this.selectedDeliveryType);
  }

}
