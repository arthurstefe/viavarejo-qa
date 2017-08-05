import { GestaoAcessosService } from './../gestao-acessos.service';
import { Component, OnInit } from '@angular/core';
import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { SelecaoItemComponent } from './../selecao-item/selecao-item/selecao-item.component';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.sass']
})
export class FuncionalidadesComponent implements OnInit {


  listFuncionalidades: ItensGestaoAcessoModel[];
  config: any;

  constructor(private gestaoAcessosService: GestaoAcessosService) {

    this.config = {
      niveis: 2,
      adicionar: true,
      textoAdicionar: 'ADICIONAR FUNCIONALIDADE'
    };
  }

  ngOnInit() {
    this.carregarLista();
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    this.gestaoAcessosService.incluirFuncionalidades(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }

  carregarLista() {
    this.gestaoAcessosService.getFuncionalidades().subscribe(
      resp => {
        this.listFuncionalidades = resp;
      }
    );
  }

  editarItem(item: ItensGestaoAcessoModel) {
    console.log(item);
    this.gestaoAcessosService.atualizarFuncionalidades(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }
}
