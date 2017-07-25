import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { UsuarioModel } from './../../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public usuario = <UsuarioModel>{};

  constructor(private loginService: LoginService, private router: Router) {
    this.usuario = this.loginService.getUserLogged();
  }

  ngOnInit() {
    // Verifica se o usuário está logado
    if (!this.loginService.isLoggedIn()) {
      this.loginService.logout();
    }
    // Verifica se o usuário precisa alterar a senha devido ao primeiro acesso
    if (!this.usuario.alterarSenhaProximoLogon && this.usuario.id) {
      this.router.navigate(['login/primeiroacesso']);
    }
  }

  logout() {
    this.loginService.logout();
  }

}
