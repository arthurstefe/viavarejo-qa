import { CadastroParametrosService } from './../cadastro-parametros.service';
import { ItensBloqueioEntregadorModel } from './../../../models/itens-bloqueio-entregador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloqueio-entregador',
  templateUrl: './bloqueio-entregador.component.html',
  styleUrls: ['./bloqueio-entregador.component.sass']
})
export class BloqueioEntregadorComponent implements OnInit {

  listBloqueioEntregador: ItensBloqueioEntregadorModel[];
  config: any;

  constructor(private cadastroParametrosService: CadastroParametrosService) {
    this.config = {
      niveis: 0,
      adicionar: true,
      textoAdicionar: 'ADICIONAR BLOQUEIO'
    };
  }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.cadastroParametrosService.getBloqueios().subscribe(
      resp => {
        this.listBloqueioEntregador = resp;
      }
    );
  }

  salvarItem(item: ItensBloqueioEntregadorModel) {
    this.cadastroParametrosService.incluirBloqueios(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

  editarItem(item: ItensBloqueioEntregadorModel) {
    console.log(item);
    this.cadastroParametrosService.atualizarBloqueios(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

}
