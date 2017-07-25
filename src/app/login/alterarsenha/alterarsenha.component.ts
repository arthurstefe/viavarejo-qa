import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioModel } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from './../login.service';
import { AlterarSenhaModel } from './alterarsenha.model';

@Component({
  selector: 'app-alterarsenha',
  templateUrl: './alterarsenha.component.html',
  styleUrls: ['./alterarsenha.component.sass']
})

export class AlterarsenhaComponent implements OnInit {
  usuario = <UsuarioModel>{};
  alterarSenhaForm = <AlterarSenhaModel>{};
  title: string;
  tipo: string;
  formInvalid: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    if (this.loginService.isLoggedIn()) {
      this.usuario = this.loginService.getUserLogged();
      this.alterarSenhaForm.login = this.usuario.login;
      this.alterarSenhaForm.id = this.usuario.id;
    }
  }

  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.data.tipo;
    switch (this.tipo) {
      case 'primeiroacesso':
        this.title = '- Primeiro acesso';
        break;
      case 'alterarsenhaesqueceu':
        this.alterarsenhaesqueceu();
        break;
    }
  }

  alterarSenha(f: NgForm) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      this.usuarioService.updateFirstAccess(this.alterarSenhaForm).subscribe(
        resp => {
          console.log(this.alterarSenhaForm, resp);
        }, error => {

        }
      );
    }
  }

  alterarsenhaesqueceu() {
    this.alterarSenhaForm.pergunta = 'Pergunta secreta ?';
  }

}
