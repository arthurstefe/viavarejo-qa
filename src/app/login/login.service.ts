import { UsuarioModel } from './../../models/usuario.model';
import { ResponseBaseModel } from './../../models/response-base.model';
import { Router } from '@angular/router';
import { AlterarSenhaModel } from './alterarsenha/alterarsenha.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoginModel } from './login.model';

import 'rxjs/add/operator/map';

import * as globals from '../globals';

interface LoginResponse {
  response: ResponseBaseModel;
  autenticacao: {
    sessionExpiracao: string;
    sessionToken: string;
    token: string;
    usuario: UsuarioModel;
  };
}

@Injectable()
export class LoginService {
  private STORAGE_TOKEN = globals.STORAGE_TOKEN;
  private STORAGE_SESSION_TOKEN = globals.STORAGE_SESSION_TOKEN;
  private STORAGE_SESSION_EXPIRACAO = globals.STORAGE_SESSION_EXPIRACAO;
  private STORAGE_USER = globals.STORAGE_USER;
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = !!localStorage.getItem(this.STORAGE_TOKEN);
  }

  login(model: LoginModel) {
    return this.http.post<LoginResponse>(globals.BASE_URL + 'autenticacoes', model)
      .map(
      res => {
        localStorage.setItem(this.STORAGE_TOKEN, res.autenticacao.token);
        localStorage.setItem(this.STORAGE_SESSION_TOKEN, res.autenticacao.sessionToken);
        localStorage.setItem(this.STORAGE_SESSION_EXPIRACAO, res.autenticacao.sessionExpiracao);
        localStorage.setItem(this.STORAGE_USER, JSON.stringify(res.autenticacao.usuario));
        this.loggedIn = true;
        this.router.navigate(['/']);
        return res.autenticacao.usuario;
      });
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem(this.STORAGE_TOKEN);
    localStorage.removeItem(this.STORAGE_SESSION_TOKEN);
    localStorage.removeItem(this.STORAGE_SESSION_EXPIRACAO);
    localStorage.removeItem(this.STORAGE_USER);
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUserLogged() {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem(this.STORAGE_USER));
    }
  }
}
