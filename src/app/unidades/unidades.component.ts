import { Component, OnInit } from '@angular/core';
import { UnidadesService } from './unidades.service';
import { UnidadeModel } from '../../models/unidade.model';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.sass']
})
export class UnidadesComponent implements OnInit {

  unidades: Array<UnidadeModel> = [];

  constructor(private unidadesService: UnidadesService) { }

  ngOnInit() {
    // this.getUnidades();
  }

  getUnidades() {
    this.unidadesService.getUnidades().subscribe(
      resp => {
        this.unidades = resp;
      }
    );
  }

  public filterConfig: Array<any> = [
    {
      boxName: 'SITUAÇÃO',
      className: 'Unidades',
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
