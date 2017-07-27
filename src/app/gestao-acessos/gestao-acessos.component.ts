import { Component, OnInit } from '@angular/core';

interface Abas {
  link: string;
  nome: string;
}

@Component({
  selector: 'app-gestao-acessos',
  templateUrl: './gestao-acessos.component.html',
  styleUrls: ['./gestao-acessos.component.sass']
})

export class GestaoAcessosComponent implements OnInit {
  navAbas: Abas[];

  constructor() {
    this.navAbas = [{
      link: 'permissoes',
      nome: 'Permissões de acesso'
    }, {
      link: 'perfis',
      nome: 'Perfis de acesso'
    }, {
      link: 'funcionalidades',
      nome: 'Funcionalidades'
    }, {
      link: 'atributos',
      nome: 'Atributos das Funcionalidades'
    }];
  }

  ngOnInit() {
  }

}
