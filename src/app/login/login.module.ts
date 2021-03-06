import { UsuarioService } from '../../services/usuario.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ReCaptchaModule } from 'angular2-recaptcha';
import { LoginService } from './login.service';
import { TermoComponent } from './termo/termo.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { AlterarsenhaComponent } from './alterarsenha/alterarsenha.component';
import { AcessoComponent } from './acesso/acesso.component';
import { SucessoComponent } from './sucesso/sucesso.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    ReCaptchaModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MdDialogModule,
    TermoComponent
  ],
  entryComponents: [TermoComponent],
  declarations: [TermoComponent, SelecaoComponent, AlterarsenhaComponent, AcessoComponent, SucessoComponent],
  providers: [
    LoginService,
    UsuarioService
  ]
})
export class LoginModule { }
