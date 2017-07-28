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
  alterarSenhaProximoLogon: boolean;
  idUsuario: number;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.isLoggedIn()) {
      this.usuario = this.loginService.getUserLogged();
      this.alterarSenhaProximoLogon = this.usuario.alterarSenhaProximoLogon;
      this.idUsuario = this.usuario.id;
    }
  }

  ngOnInit() {
    // Verifica se o usuário está logado
    if (!this.loginService.isLoggedIn()) {
      this.loginService.logout();
    }
    // Verifica se o usuário precisa alterar a senha devido ao primeiro acesso
    if (this.alterarSenhaProximoLogon && this.idUsuario) {
      // this.router.navigate(['login/primeiroacesso']);
    }
  }

  logout() {
    this.loginService.logout();
  }

}
