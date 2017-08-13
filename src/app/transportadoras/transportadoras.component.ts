import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.sass']
})
export class TransportadorasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public filterConfig: Array<any> = [
    {
      boxName: 'STATUS PORTAL',
      className: 'Transportadoras',
      boxFields: [
        {name: 'Habilitado'},
        {name: 'Desabilitado'}
      ]
    },
    {
      boxName: 'SITUAÇÃO',
      boxFields: [
        {name: 'Ativo'},
        {name: 'Bloqueado'},
        {name: 'Inativo'}
      ]
    }
  ];

  public tableColumns: Array<any> = [
    {fieldName: 'name', label: 'NOME'},
    {fieldName: 'email', label: 'EMAIL'},
    {fieldName: 'cpf', label: 'CPF'},
    {fieldName: 'empresa', label: 'EMPRESA'},
    {fieldName: 'filial', label: 'FILIAL'},
    {fieldName: 'cargo', label: 'CARGO'},
    {fieldName: 'perfil', label: 'PERFIL'},
    {fieldName: 'situacao', label: 'SITUAÇÃO'},
  ]

  public tableData: Array<any> = [{
      name: 'Arthur',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Alexandre',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Thiago',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Pedro',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Arthur',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Alexandre',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Thiago',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }, {
      name: 'Pedro',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Ativo'
    }
  ];

}
