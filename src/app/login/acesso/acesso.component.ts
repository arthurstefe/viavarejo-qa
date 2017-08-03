import { FatoresAutenticacaoModel } from './../../../models/fatores-autenticacao.model';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MdDialog, MdSnackBar } from '@angular/material';

import { TermoComponent } from './../termo/termo.component';
import { LoginService } from './../login.service';
import { UsuarioService } from './../../../services/usuario.service';
import { LoginModel } from './../login.model';
import { UsuarioModel } from './../../../models/usuario.model';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.sass']
})
export class AcessoComponent implements OnInit {
  loginData: LoginModel;
  usuarioModel: UsuarioModel;
  title: string;
  tipo: string;
  chave: 'a';
  termoDialog: any;
  formInvalid: boolean;
  private testMode: boolean;

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MdDialog,
    private snackBar: MdSnackBar
  ) {
    this.loginData = new LoginModel();
    this.testMode = true;
  }

  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.data.tipo;
    switch (this.tipo) {
      case 'transportadora':
        this.title = 'Sou Transportadora';
        break;
      case 'viavarejo':
        this.title = 'Sou Via Varejo';
        break;
    }
  }

  handleCorrectCaptcha(event) {
    this.chave = event;
    this.loginData.fatoresAutenticacao = {
      tipo: 'captcha',
      chave: event
    };
  }

  postLogin(f: NgForm) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;

      if (!this.chave) {
        this.snackBar.open('O Captcha é obrigatório', 'Fechar', {
          duration: 2000,
        });
        return;
      }

      if (this.testMode) {
        // ------------------ Só para testar
        this.usuarioModel = this.loginService.fakeLogin();
        this.termoDialog = this.openDialog();
        this.termoDialog.afterClosed().subscribe(
          result => {
            if (result === 'aceito') {
              this.usuarioModel.dataAceiteTermoResponsabilidade = new Date().toISOString();
            } else {
              this.loginService.logout();
            }
          }
        );
      } else {
        this.loginService.login(this.loginData).subscribe(
          resp => {
            this.usuarioModel = resp;
            if (this.tipo === 'transportadora' && !this.usuarioModel.dataAceiteTermoResponsabilidade) {
              this.termoDialog = this.openDialog();
              this.termoDialog.afterClosed().subscribe(
                result => {
                  if (result === 'aceito') {
                    this.usuarioModel.dataAceiteTermoResponsabilidade = new Date().toISOString();
                    this.usuarioService.aceitarTermo(this.usuarioModel).subscribe();
                  } else {
                    this.loginService.logout();
                  }
                }
              );
            }
          },
          error => {
            this.router.navigate(['/login/' + this.tipo]);
            this.snackBar.open('Erro ao fazer o login: ' + error.statusText, 'Fechar', {
              duration: 2000,
            });
          }
        );
      }
    }
  }

  openDialog() {
    return this.dialog.open(TermoComponent, {
      height: '100%',
      width: '42.08%',
      position: {
        right: '0px',
        top: '0px'
      }
    });
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
