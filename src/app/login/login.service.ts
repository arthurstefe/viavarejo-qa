import { AlterarSenhaModel } from './alterarsenha/alterarsenha.model';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginModel } from './login.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClientModule) { }

  login(model: LoginModel) {
    return model;
  }

  alterarSenha(model: AlterarSenhaModel) {
    return model;
  }
}
