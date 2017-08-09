import { Router, ActivatedRoute } from '@angular/router';
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
  menuCollapsed: boolean = false;

  pageName: string;

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
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

    if (this.activatedRoute.children.length > 0) {
      this.pageName = this.activatedRoute.children[0].snapshot.data.pageName;
    }


    this.pageName = this.pageName || 'Olá, ' + this.usuario.nome + '!';
  }

  logout() {
    this.loginService.logout();
  }

  toggleMenu(){
    this.menuCollapsed = !this.menuCollapsed;
  }

}
