import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos-funcionalidades',
  templateUrl: './atributos-funcionalidades.component.html',
  styleUrls: ['./atributos-funcionalidades.component.sass']
})
export class AtributosFuncionalidadesComponent implements OnInit {

  listAtributosFuncionalidade: ItensGestaoAcessoModel[];
  config: any;

  constructor() {
    this.config = {
      niveis: 0
    };

    this.listAtributosFuncionalidade = [{
      id: 1,
      nome: 'Inserir dados',
      nivel: 0,
      status: 1
    }, {
      id: 2,
      nome: 'Alterar dados',
      nivel: 0,
      status: 1
    }, {
      id: 3,
      nome: 'Consultar dados',
      nivel: 0,
      status: 1
    }, {
      id: 4,
      nome: 'Imprimir',
      nivel: 0,
      status: 1
    }, {
      id: 5,
      nome: 'Importar arquivos',
      nivel: 0,
      status: 1
    }, {
      id: 6,
      nome: 'Gerar arquivo',
      nivel: 0,
      status: 1
    }, {
      id: 7,
      nome: 'Aprovar',
      nivel: 0,
      status: 1
    }, {
      id: 8,
      nome: 'Reprovar',
      nivel: 0,
      status: 0
    }];
  }

  ngOnInit() {
  }

}
