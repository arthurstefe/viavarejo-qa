import { SelecaoItemModule } from './selecao-item/selecao-item/selecao-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { AcessosComponent } from './acessos/acessos.component';
import { SelecaoItemComponent } from './selecao-item/selecao-item/selecao-item.component';

@NgModule({
  imports: [
    CommonModule,
    SelecaoItemModule,
    MdTabsModule
  ],
  exports: [
    MdTabsModule
  ],
  declarations: [AcessosComponent, SelecaoItemComponent]
})
export class GestaoAcessosModule { }
