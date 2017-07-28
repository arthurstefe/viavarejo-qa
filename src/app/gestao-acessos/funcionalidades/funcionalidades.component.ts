import { Component, OnInit } from '@angular/core';
import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { SelecaoItemComponent } from './../selecao-item/selecao-item/selecao-item.component';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.sass']
})
export class FuncionalidadesComponent implements OnInit {


  listFuncionalidades: ItensGestaoAcessoModel[];
  config: any;

  constructor() {

    this.config = {
      niveis: 2
    };

    this.listFuncionalidades = [{
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
