import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UnidadesService } from '../unidades.service';
import { UnidadeModel } from '../../../models/unidade.model';

@Component({
  selector: 'app-unidades-detalhes',
  templateUrl: './unidades-detalhes.component.html',
  styleUrls: ['./unidades-detalhes.component.sass']
})
export class UnidadesDetalhesComponent implements OnInit {

  unidade: UnidadeModel = new UnidadeModel();
  public empresas: Array<any> = [];
  public filiais: Array<any> = [];

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private unidadesService: UnidadesService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  deletarUnidade() {
    this.unidadesService.deletarUnidade(this.unidade).subscribe(
      resp => {
        this.showSuccess("Unidade excluída com sucesso!");
        this.redirectPage();
      }
    );
  }

  redirectPage(){
    this.router.navigateByUrl('/unidades');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
    // this.route.params
    // .switchMap((params: Params) => this.unidadesService.getUnidade(+params['id']))
    // .subscribe((unidade) => this.unidade = new UnidadeModel(unidade));
  }

}
