import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { TermoComponent } from './termo/termo.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { AlterarsenhaComponent } from './alterarsenha/alterarsenha.component';
import { AcessoComponent } from './acesso/acesso.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MdDialogModule,
    TermoComponent
  ],
  entryComponents: [ TermoComponent ],
  declarations: [TermoComponent, SelecaoComponent, AlterarsenhaComponent, AcessoComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
