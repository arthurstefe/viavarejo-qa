import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfis-acesso',
  templateUrl: './perfis-acesso.component.html',
  styleUrls: ['./perfis-acesso.component.sass']
})
export class PerfisAcessoComponent implements OnInit {

  listPerfilAcesso: ItensGestaoAcessoModel[];
  config: any;

  constructor() {
    this.config = {
      niveis: 0,
      adicionar: true,
      textoAdicionar: 'ADICIONAR PERFIL'
    };

    this.listPerfilAcesso = [{
      id: 1,
      nome: 'Gestão de acessos',
      nivel: 0,
      status: 1
    }, {
      id: 2,
      nome: 'Administrador GA',
      nivel: 0,
      status: 1
    }, {
      id: 3,
      nome: 'Transportes',
      nivel: 0,
      status: 1
    }, {
      id: 4,
      nome: 'CRL Reserva',
      nivel: 0,
      status: 1
    }, {
      id: 5,
      nome: 'CRL Entregas',
      nivel: 0,
      status: 1
    }, {
      id: 6,
      nome: 'Transportadora',
      nivel: 0,
      status: 1
    }, {
      id: 7,
      nome: 'Entregador',
      nivel: 0,
      status: 1
    }, {
      id: 8,
      nome: 'Ressarcimento',
      nivel: 0,
      status: 1
    }];
  }

  ngOnInit() {
  }

}
