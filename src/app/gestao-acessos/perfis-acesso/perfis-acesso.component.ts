import { GestaoAcessosService } from './../gestao-acessos.service';
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

  constructor(private gestaoAcessosService: GestaoAcessosService) {
    this.config = {
      niveis: 0,
      adicionar: true,
      textoAdicionar: 'ADICIONAR PERFIL'
    };
  }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.gestaoAcessosService.getPerfis().subscribe(
      resp => {
        this.listPerfilAcesso = resp;
      }
    );
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    this.gestaoAcessosService.incluirPerfis(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

  editarItem(item: ItensGestaoAcessoModel) {
    console.log(item);
    this.gestaoAcessosService.atualizarPerfis(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

}
