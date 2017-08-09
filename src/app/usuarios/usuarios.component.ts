import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {

  nameButton: any = 'Add usuário';

  constructor() { }

  ngOnInit() {
  }

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
