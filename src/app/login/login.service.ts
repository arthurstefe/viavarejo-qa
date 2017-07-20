import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginData } from './login.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClientModule) { }

  login(loginData: LoginData) {
    return loginData;
  }
}
