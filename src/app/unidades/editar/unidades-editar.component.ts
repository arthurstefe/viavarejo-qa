import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UnidadesService } from '../unidades.service';
import { UnidadeModel } from '../../../models/unidade.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-unidades-editar',
  templateUrl: './unidades-editar.component.html',
  styleUrls: ['./unidades-editar.component.sass']
})
export class UnidadesEditarComponent implements OnInit {

  unidade: UnidadeModel = new UnidadeModel();
  public empresas: Array<any> = [];
  public filiais: Array<any> = [];
  formInvalid: boolean;

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private unidadesService: UnidadesService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  getEmpresas(){
    this.unidadesService.getEmpresas().subscribe(
      resp => {
        this.empresas = resp;
      });
  }

  getFiliais(){
    this.unidadesService.getFiliais().subscribe(
      resp => {
        this.filiais = resp;
      });
  }

  closeModal(){
    this.showModal = false;
  }

  redirectPage(){
    this.router.navigateByUrl('/unidades');
  }

  atualizarUnidade(f, unidade: UnidadeModel) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      this.unidade = new UnidadeModel(unidade);
      this.unidadesService.atualizarUnidade(unidade).subscribe(
        resp => {
          this.showSuccess("Unidade atualizada com sucesso!");
          this.redirectPage();
        }
      );
    }
  }

  deletarUnidade() {
    this.unidadesService.deletarUnidade(this.unidade).subscribe(
      resp => {
        this.showSuccess("Unidade excluída com sucesso!");
        this.redirectPage();
      }
    );
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
