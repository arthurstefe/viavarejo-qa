import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessos',
  templateUrl: './acessos.component.html',
  styleUrls: ['./acessos.component.sass']
})
export class AcessosComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {

  }

  add() {
    console.log(this.addList);
    // this.acoes.push(this.addList);
    this.addList = '';
  }

  itemSelecionado(id, e) {
    console.log(id, e);
  }


}
