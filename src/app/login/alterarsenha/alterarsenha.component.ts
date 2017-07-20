import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../login.service';
import { AlterarSenhaModel } from './alterarsenha.model';

@Component({
  selector: 'app-alterarsenha',
  templateUrl: './alterarsenha.component.html',
  styleUrls: ['./alterarsenha.component.sass']
})

export class AlterarsenhaComponent implements OnInit {
  alterarSenhaForm: AlterarSenhaModel;
  title: string;
  tipo: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.alterarSenhaForm = new AlterarSenhaModel();
   }

  ngOnInit() {
    this.tipo = this.router.url.split('/')[2];
    switch (this.tipo) {
      case 'primeiroacesso':
        this.title = '- Primeiro acesso';
        break;
    }
  }

  alterarSenha() {
    const alterarSenhaResponse = this.loginService.alterarSenha(this.alterarSenhaForm);
    console.log(alterarSenhaResponse);
  }

}
