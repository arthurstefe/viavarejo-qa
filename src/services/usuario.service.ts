import { ResponseBaseModel } from './../models/response-base.model';
import { AlterarSenhaModel } from './../app/login/alterarsenha/alterarsenha.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';

import * as globals from '../app/globals';

@Injectable()
export class UsuarioService {
  private STORAGE_USER = globals.STORAGE_USER;

  constructor(private http: HttpClient) { }

  aceitarTermo(usuario: UsuarioModel) {
    return this.http.patch<ResponseBaseModel>(globals.BASE_URL + 'usuarios/' + usuario.id, [
      {
        op: 'replace',
        path: '/dataAceiteTermoResponsabilidade',
        value: usuario.dataAceiteTermoResponsabilidade
      }
    ]);
  }

  updateLocalUser(usuario: UsuarioModel) {
    localStorage.setItem(this.STORAGE_USER, JSON.stringify(usuario));
  }

  updateFirstAccess(alterarSenha: AlterarSenhaModel) {
    return this.http.post<ResponseBaseModel>(globals.BASE_URL + 'usuarios/senhas/redefinicoes/' + alterarSenha.chave,
      JSON.stringify(alterarSenha)
    );
  }
  // updateFirstAccess(alterarSenha: AlterarSenhaModel) {
  //   return this.http.patch<ResponseBaseModel>(globals.BASE_URL + 'usuarios/' + alterarSenha.id, [
  //     { op: 'replace', path: '/perguntaSecreta', value: alterarSenha.pergunta },
  //     { op: 'replace', path: '/respostaSecreta', value: alterarSenha.resposta },
  //     { op: 'replace', path: '/alterarSenhaProximoLogon', value: false }
  //   ]);
  // }

  updatePassword(alterarSenha: AlterarSenhaModel) {
    alterarSenha.chave = alterarSenha.chave || '';
    return this.http.post<ResponseBaseModel>(globals.BASE_URL + 'usuarios/senhas/redefinicoes/', {
      login: alterarSenha.login,
      senhaAtual: alterarSenha.senhaProvisoria || alterarSenha.senhaAtual,
      senhaNova: alterarSenha.novaSenha
    });
  }

}
