import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSlideToggleModule,
    FormsModule
  ],
  exports: [
    MdSlideToggleModule,
    FormsModule
  ],
  declarations: []
})
export class SelecaoItemModule { }
