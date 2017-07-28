import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissoes-acesso',
  templateUrl: './permissoes-acesso.component.html',
  styleUrls: ['./permissoes-acesso.component.sass']
})
export class PermissoesAcessoComponent implements OnInit {

  listPermissoes: ItensGestaoAcessoModel[];
  config: any;

  constructor() {
    this.config = {
      niveis: 0,
      adicionar: false
    };

    this.listPermissoes = [{
      id: this.genID(),
      nome: 'Administrar Gestão de acessos',
      nivel: 0,
      status: 1,
      subnivel: [{
        id: this.genID(),
        nome: 'Gestão de acessos',
        status: 1,
        subnivel: []
      }, {
        id: this.genID(),
        nome: 'Cadastro de usuários',
        status: 1,
        subnivel: []
      }, {
        id: this.genID(),
        nome: 'Cadastro de transportadoras',
        status: 1,
        subnivel: []
      }, {
        id: this.genID(),
        nome: 'Consulta de unidades',
        status: 1,
        subnivel: []
      }]
    }, {
      id: this.genID(),
      nome: 'Administrar TI',
      nivel: 0,
      status: 1,
      subnivel: []
    }, {
      id: this.genID(),
      nome: 'Consultar EDI',
      nivel: 0,
      status: 1,
      subnivel: []
    }, {
      id: this.genID(),
      nome: 'Consultar Pedidos',
      nivel: 0,
      status: 1,
      subnivel: []
    }, {
      id: this.genID(),
      nome: 'Gestão de entregas',
      nivel: 0,
      status: 1,
      subnivel: []
    }];
  }

  ngOnInit() {
  }
  genID() {
    const id = Date.now();
    return Math.floor(Math.random() * id) + id;
  }
}
