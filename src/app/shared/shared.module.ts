import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
]

// others
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ...MATERIAL,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
