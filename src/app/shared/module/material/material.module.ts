import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatInputModule
  ]
})
export class MaterialModule { }
