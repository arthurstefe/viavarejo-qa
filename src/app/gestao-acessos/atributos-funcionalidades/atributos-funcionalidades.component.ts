import { GestaoAcessosService } from './../gestao-acessos.service';
import { ItensGestaoAcessoModel } from './../../../models/itens-gestao-acesso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos-funcionalidades',
  templateUrl: './atributos-funcionalidades.component.html',
  styleUrls: ['./atributos-funcionalidades.component.sass']
})
export class AtributosFuncionalidadesComponent implements OnInit {

  listAtributosFuncionalidade: ItensGestaoAcessoModel[];
  config: any;

  constructor(private gestaoAcessosService: GestaoAcessosService) {
    this.config = {
      niveis: 0,
      adicionar: true,
      textoAdicionar: 'ADICIONAR ATRIBUTO'
    };

  }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.gestaoAcessosService.getAtributosFuncionalidade().subscribe(
      resp => {
        this.listAtributosFuncionalidade = resp;
      }
    );
  }

  salvarItem(item: ItensGestaoAcessoModel) {
    console.log(item);
    this.gestaoAcessosService.incluirAtributosFuncionalidade(item).subscribe(
      resp => {
        this.carregarLista();
      });
  }


}
