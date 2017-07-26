import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessos',
  templateUrl: './acessos.component.html',
  styleUrls: ['./acessos.component.sass']
})
export class AcessosComponent implements OnInit {
  funcionalidades = [
    {
      'id': '1',
      'nome': 'Administrador GA',
      'nivel': '0',
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': '',
      'subnivel': [
        {
          'id': '4',
          'nome': 'Gestão de acessos',
          'nivel': '1',
          'descricao': '',
          'status': '1',
          'dataInclusao': '',
          'dataUltimaAlteracao': '',
          'subnivel': []
        },
        {
          'id': '5',
          'nome': 'Cadastro de usuários',
          'nivel': '1',
          'descricao': '',
          'status': '1',
          'dataInclusao': '',
          'dataUltimaAlteracao': '',
          'subnivel': [{
            'id': '54',
            'nome': 'Gestão de acessos',
            'nivel': '1',
            'descricao': '',
            'status': '1',
            'dataInclusao': '',
            'dataUltimaAlteracao': '',
            'subnivel': [{
              'id': '545',
              'nome': 'Gestão de acessos',
              'nivel': '1',
              'descricao': '',
              'status': '1',
              'dataInclusao': '',
              'dataUltimaAlteracao': '',
              'subnivel': []
            }]
          }]
        }
      ]
    },
    {
      'id': '2',
      'nome': 'Administrar TI',
      'nivel': '0',
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': '',
      'subnivel': []
    },
    {
      'id': '10',
      'nome': 'Consultar EDI',
      'nivel': '0',
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': '',
      'subnivel': [{
        'id': '7',
        'nome': 'Gestão',
        'nivel': '10',
        'descricao': '',
        'status': '1',
        'dataInclusao': '',
        'dataUltimaAlteracao': ''
      },]
    },
    {
      'id': '6',
      'nome': 'Cadastro de transportadoras',
      'nivel': '0',
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': '',
      'subnivel': [],
    }
  ];
  acoes = [
    {
      'id': '1',
      'nome': 'Inserir Dados',
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '2',
      'nome': 'Alterar Dados',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '3',
      'nome': 'Consutar Dados',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '4',
      'nome': 'Imprimir',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '5',
      'nome': 'Importar arquivos',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '6',
      'nome': 'Gerar arquivo',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    },
    {
      'id': '7',
      'nome': 'Aprovar',
      'descricao': '',
      'status': '0',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    }
  ];

  addList: string;
  accordionOpen = [];
  lista: any;
  fakeList = new Array(3);

  constructor() {
    this.lista = this.funcionalidades;
  }

  ngOnInit() {

  }

  add() {
    const nextId = this.acoes.length + 1;
    this.acoes.push({
      'id': nextId.toString(),
      'nome': this.addList,
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': ''
    });
    this.addList = '';
  }

  itemSelecionado(id, e) {
    console.log(id, e);
  }

  accordion(e, id) {
    this.accordionOpen[id] = e;
  }

  addItem(i, idPai) {
    let novoItem = {
      'id': this.genID(),
      'nome': '',
      'nivel': idPai,
      'descricao': '',
      'status': '1',
      'dataInclusao': '',
      'dataUltimaAlteracao': '',
      'editar': 'true',
      'novo': true,
      'subnivel': []
    };
    if (i === undefined && idPai === undefined) {
      novoItem.nivel = 0;
      this.lista.push(novoItem);
    } else {
      this.accordionOpen[idPai] = true;
      this.lista[i].subnivel.push(novoItem);
    }
  }

  cancelarItem(i, item: ItensGestaoAcessoModel) {
    this.lista[i].subnivel = this.lista[i].subnivel.filter(e => !(e.id === item.id && e.novo));
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    console.log(item);
  }

  genID() {
    const id = Date.now();
    return Math.floor(Math.random() * id) + id;
  }

}
