import { Component, OnInit } from '@angular/core';

interface Abas {
  link: string;
  nome: string;
}

@Component({
  selector: 'app-cadastro-parametros',
  templateUrl: './cadastro-parametros.component.html',
  styleUrls: ['./cadastro-parametros.component.sass']
})
export class CadastroParametrosComponent implements OnInit {
  navAbas: Abas[];

  constructor() {
    this.navAbas = [{
      link: 'parametros-gerais',
      nome: 'Parâmetros Gerais'
    }, {
      link: 'bloqueio-entregador',
      nome: 'Bloqueio do Entregador'
    }];
  }

  ngOnInit() {
  }

}
