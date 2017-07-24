import { ResponseBaseModel } from './../models/response-base.model';
import { AlterarSenhaModel } from './../app/login/alterarsenha/alterarsenha.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';

import * as globals from '../app/globals';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

  aceitarTermo(usuario: UsuarioModel) {
    return this.http.patch<ResponseBaseModel>(globals.BASE_URL + 'usuarios/' + usuario.id, {
      dataAceiteTermoResponsabilidade: usuario.dataAceiteTermoResponsabilidade
    });
  }

  updateFirstAccess(alterarSenha: AlterarSenhaModel) {
    return this.http.patch<ResponseBaseModel>(globals.BASE_URL + 'usuarios/' + alterarSenha.id, {
      perguntaSecreta: alterarSenha.pergunta,
      respostaSecreta: alterarSenha.resposta
    });
  }

  updatePassword(alterarSenha: AlterarSenhaModel) {
    return this.http.post<ResponseBaseModel>(globals.BASE_URL + '/usuarios/senhas/redefinicoes/' + alterarSenha.chave, {
      login: alterarSenha.login,
      senhaAtual: alterarSenha.senhaProvisoria || alterarSenha.senhaAtual,
      senhaNova: alterarSenha.novaSenha
    });
  }

}
