import { SelecaoItemBloqueioModule } from './selecao-item-bloqueio/selecao-item-bloqueio/selecao-item-bloqueio.module';
import { SelecaoItemBloqueioComponent } from './selecao-item-bloqueio/selecao-item-bloqueio/selecao-item-bloqueio.component';
import { CadastroParametrosService } from './cadastro-parametros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';

import { BloqueioEntregadorComponent } from './bloqueio-entregador/bloqueio-entregador.component';
import { ParametrosGeraisComponent } from './parametros-gerais/parametros-gerais.component';
import { BloqueiosComponent } from './bloqueios/bloqueios.component';

@NgModule({
  imports: [
    CommonModule,
    SelecaoItemBloqueioModule,
    MdTabsModule
  ],
  exports: [
    MdTabsModule
  ],
    providers: [
    CadastroParametrosService
  ],
  declarations: [
    SelecaoItemBloqueioComponent,
    BloqueioEntregadorComponent,
    ParametrosGeraisComponent,
    BloqueiosComponent
    ]
})
export class CadastroParametrosModule { }
