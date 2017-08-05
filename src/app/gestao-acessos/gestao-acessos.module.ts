import { GestaoAcessosService } from './gestao-acessos.service';
import { SelecaoItemModule } from './selecao-item/selecao-item/selecao-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { AcessosComponent } from './acessos/acessos.component';
import { SelecaoItemComponent } from './selecao-item/selecao-item/selecao-item.component';
import { PerfisAcessoComponent } from './perfis-acesso/perfis-acesso.component';
import { PermissoesAcessoComponent } from './permissoes-acesso/permissoes-acesso.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { AtributosFuncionalidadesComponent } from './atributos-funcionalidades/atributos-funcionalidades.component';

@NgModule({
  imports: [
    CommonModule,
    SelecaoItemModule,
    MdTabsModule
  ],
  exports: [
    MdTabsModule
  ],
    providers: [
    GestaoAcessosService
  ],
  declarations: [
    AcessosComponent,
    SelecaoItemComponent,
    PerfisAcessoComponent,
    PermissoesAcessoComponent,
    FuncionalidadesComponent,
    AtributosFuncionalidadesComponent]
})
export class GestaoAcessosModule { }
