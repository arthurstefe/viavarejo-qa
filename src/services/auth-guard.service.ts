import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { LoginService } from './../app/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}
