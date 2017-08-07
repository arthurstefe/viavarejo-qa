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
  public alterarSenhaForm = <AlterarSenhaModel>{};
  title: string;
  tipo: string;
  formInvalid: boolean;
  perguntaSecreta: string;
  alterarSenhaProximoLogon: boolean;
  private chavePrimeiroAcesso: string;

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
      this.perguntaSecreta = this.usuario.perguntaSecreta;
      this.alterarSenhaProximoLogon = this.usuario.alterarSenhaProximoLogon;
    }
    // this.alterarSenhaForm.pergunta = this.perguntaSecreta || 'Pergunta secreta?';
    activatedRoute.params.subscribe(params => {
      if (params.chave) {
        this.chavePrimeiroAcesso = params.chave;
      }
    });
  }

  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.data.tipo;
    switch (this.tipo) {
      case 'primeiroacesso':
        this.title = '- Primeiro acesso';
        break;
    }
    if (this.chavePrimeiroAcesso !== '' && this.tipo === 'alterarsenhaesqueceu') {
      this.getSenhaSecreta();
    }
  }

  getSenhaSecreta() {
    this.usuarioService.getPerguntaSecreta(this.alterarSenhaForm).subscribe(resp => {
      this.perguntaSecreta = resp['perguntaSecreta'];
    });
  }

  alterarSenha(f: NgForm) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      switch (this.tipo) {
        case 'primeiroacesso':
          this.alterarSenhaForm.chave = this.chavePrimeiroAcesso;
          this.usuarioService.updateFirstAccess(this.alterarSenhaForm).subscribe(resp => {
            this.router.navigate(['/login']);
          });
          break;
      }

      this.usuarioService.updateFirstAccess(this.alterarSenhaForm).subscribe(
        resp => {
          // Atualiza os dados do usuário no localStorage
          this.usuario.perguntaSecreta = this.alterarSenhaForm.pergunta;
          this.usuario.respostaSecreta = this.alterarSenhaForm.resposta;
          this.usuario.alterarSenhaProximoLogon = false;
          this.usuarioService.updateLocalUser(this.usuario);

          // Atualiza a senha do usuário
          this.usuarioService.updatePassword(this.alterarSenhaForm).subscribe(respPass => {
          }, error => {
          });
        }, error => {
        }
      );
    }
  }

  togglePass(input: any, element: any) {
    const attr = input.getAttribute('type');

    if (attr === 'password') {
      element.classList.add('show');
      input.setAttribute('type', 'text');
    } else {
      element.classList.remove('show');
      input.setAttribute('type', 'password');
    }
  }
}
