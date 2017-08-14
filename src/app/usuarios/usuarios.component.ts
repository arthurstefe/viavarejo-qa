import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { UsuarioModel} from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {

  nameButton: any = 'Add usuário';
  usuarios: Array<UsuarioModel> = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    // this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      resp => {
        this.usuarios = resp;
      }
    );
  }

  public filterConfig: Array<any> = [
    {
      boxName: 'PERFIL',
      className: 'Usuários',
      boxFields: [
        {name: 'Administrador TI'},
        {name: 'Administrador GA'},
        {name: 'Transportes'},
        {name: 'CRL Reversa'},
        {name: 'CRL Entregas'},
        {name: 'Transportadoras'},
        {name: 'Entregador'},
        {name: 'Ressarcimento'}
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
      cpf: '000.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Inativo'
    }, {
      name: 'Alexandre',
      email: 'teste@teste.com',
      cpf: '123.456.789-10',
      empresa: 'HBSIS',
      filial: 'CD Jundiaí',
      cargo: 'Analista',
      perfil: 'Administrador TI',
      situacao: 'Bloqueado'
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
