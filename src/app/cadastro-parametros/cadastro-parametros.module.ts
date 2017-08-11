// import { SelecaoItemModule } from './selecao-item/selecao-item/selecao-item.module';
// import { SelecaoItemComponent } from './selecao-item/selecao-item/selecao-item.component';
import { CadastroParametrosService } from './cadastro-parametros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';

import { BloqueioEntregadorComponent } from './bloqueio-entregador/bloqueio-entregador.component';
import { ParametrosGeraisComponent } from './parametros-gerais/parametros-gerais.component';

@NgModule({
  imports: [
    CommonModule,
    // SelecaoItemModule,
    MdTabsModule
  ],
  exports: [
    MdTabsModule
  ],
    providers: [
    CadastroParametrosService
  ],
  declarations: [
    // SelecaoItemComponent,
    BloqueioEntregadorComponent,
    ParametrosGeraisComponent
    ]
})
export class CadastroParametrosModule { }
