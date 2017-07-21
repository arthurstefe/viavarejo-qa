import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.alterarSenhaForm = new AlterarSenhaModel();
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


  alterarSenha() {
    const alterarSenhaResponse = this.loginService.alterarSenha(this.alterarSenhaForm);
    console.log(alterarSenhaResponse);
  }

  alterarsenhaesqueceu() {
    this.alterarSenhaForm.pergunta = 'Pergunta secreta ?';
  }

}
