import { Router } from '@angular/router';
import { AlterarSenhaModel } from './alterarsenha/alterarsenha.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoginModel } from './login.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import * as globals from '../globals';

interface LoginResponse {
  id: string;
  nome: string;
  senha: string;
  token: string;
}

@Injectable()
export class LoginService {
  private STORAGE_TOKEN = globals.STORAGE_TOKEN;
  private STORAGE_USER = globals.STORAGE_USER;
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = !!localStorage.getItem(this.STORAGE_TOKEN);
  }

  login(model: LoginModel): Observable<LoginModel> {
    return this.http.get(globals.BASE_URL + '/profile/1')
      .map(res => {
        localStorage.setItem(this.STORAGE_TOKEN, res['token']);
        localStorage.setItem(this.STORAGE_USER, JSON.stringify(res));
        this.loggedIn = true;
        this.router.navigate(['/']);
        return res;
      })
      .catch(err => {
        throw new Error(err.message);
      });
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem(this.STORAGE_TOKEN);
    localStorage.removeItem(this.STORAGE_USER);
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  alterarSenha(model: AlterarSenhaModel) {
    return model;
  }
}
