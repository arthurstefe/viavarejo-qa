import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: HttpClientModule) { }

  login(empresa: string, login: string, senha: string) {
    return 'ok';
  }
}
