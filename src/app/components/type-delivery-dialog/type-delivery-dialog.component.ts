import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-type-delivery-dialog',
  templateUrl: './type-delivery-dialog.component.html',
  styleUrl: './type-delivery-dialog.component.scss'
})
export class TypeDeliveryDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  deliveryForm: FormGroup;
  selectedDeliveryType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TypeDeliveryDialogComponent>
    ) {
    this.deliveryForm = this.formBuilder.group({
      deliveryType: ['']
    });
  }

  selectDeliveryType(deliveryType: string) {
    this.selectedDeliveryType = deliveryType;
    this.dialogRef.close(this.selectedDeliveryType);
  }

}
