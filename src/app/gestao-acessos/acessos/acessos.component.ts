import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acessos',
  templateUrl: './acessos.component.html',
  styleUrls: ['./acessos.component.sass']
})
export class AcessosComponent implements OnInit {
  @Input() lista: ItensGestaoAcessoModel[];
  @Input() config: any;

  listaPadrao = [{
    'id': '1',
    'nome': 'Administrador GA',
    'nivel': '0',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
  }, {
    'id': '2',
    'nome': 'Administrar TI',
    'nivel': '0',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
  }, {
    'id': '3',
    'nome': 'Consultar EDI',
    'nivel': '0',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
  }, {
    'id': '4',
    'nome': 'Gestão de acessos',
    'nivel': '1',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
    'filho': 1
  }, {
    'id': '5',
    'nome': 'Cadastro de usuários',
    'nivel': '1',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
    'filho': 1
  }, {
    'id': '54',
    'nome': 'Gestão de acessos',
    'nivel': '1',
    'descricao': '',
    'status': '1',
    'dataInclusao': '',
    'dataUltimaAlteracao': '',
    'filho': 5
  }

  ];

  funcionaslidades = [
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
        'dataUltimaAlteracao': '',
        'subnivel': []
      }]
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

  addList: string;
  accordionOpen = [];
  fakeList = new Array(3);

  constructor() {
    // this.lista = this.funcionalidades;
  }

  ngOnInit() {
    this.ordenarLista(this.listaPadrao);
  }

  ordenarLista(lista) {
    return lista;
  }

  itemSelecionado(id, e) {
    console.log(id, e);
  }

  accordion(e, id) {
    this.accordionOpen[id] = e;
  }

  addItem(idPai?, i?) {
    const novoItem = new ItensGestaoAcessoModel;
    novoItem.id = this.genID();
    novoItem.nivel = idPai || 0;
    novoItem.editar = true;
    novoItem.novo = true;
    novoItem.subnivel = [];
    if (i === undefined && idPai === undefined) {
      novoItem.nivel = 0;
      this.lista.push(novoItem);
    } else {
      this.accordionOpen[idPai] = true;
      if (i[1] >= 0) {
        this.lista[i[0]].subnivel[i[1]].subnivel.push(novoItem);
      } else {
        this.lista[i[0]].subnivel.push(novoItem);
      }
    }
  }

  cancelarItem(i, item: ItensGestaoAcessoModel) {
    if (i[1] >= 0) {
      this.lista[i[0]].subnivel[i[1]].subnivel = this.lista[i[0]].subnivel[i[1]].subnivel.filter(e => !(e.id === item.id && e.novo));
    } else {
      if (i > 0) {
        this.lista[i].subnivel = this.lista[i].subnivel.filter(e => !(e.id === item.id && e.novo));
      } else {
        this.lista = this.lista.filter(e => !(e.id === item.id && e.novo));
      }
    }
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    console.log(item);
  }

  genID() {
    const id = Date.now();
    return Math.floor(Math.random() * id) + id;
  }

}
