import { GestaoAcessosService } from './../gestao-acessos.service';
import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissoes-acesso',
  templateUrl: './permissoes-acesso.component.html',
  styleUrls: ['./permissoes-acesso.component.sass']
})
export class PermissoesAcessoComponent implements OnInit {

  listPermissoes: ItensGestaoAcessoModel[];
  config: any;

  constructor(private gestaoAcessosService: GestaoAcessosService) {
    this.config = {
      niveis: 0,
      adicionar: false
    };

  }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.gestaoAcessosService.getPermissoes().subscribe(
      resp => {
        this.listPermissoes = resp;
      }
    );
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    this.gestaoAcessosService.incluirPermissoes(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

  editarItem(item: ItensGestaoAcessoModel) {
    this.gestaoAcessosService.atualizarPermissoes(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }
}
