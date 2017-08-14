import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadesService } from '../unidades.service';
import { UnidadeModel } from '../../../models/unidade.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unidades-criar',
  templateUrl: './unidades-criar.component.html',
  styleUrls: ['./unidades-criar.component.sass']
})
export class UnidadesCriarComponent implements OnInit {

  unidade: UnidadeModel = new UnidadeModel();
  public empresas: Array<any> = [];
  public filiais: Array<any> = [];

  formInvalid: boolean;
  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private unidadesService: UnidadesService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  salvarUnidade(f, unidade) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      this.unidade = new UnidadeModel(unidade);
      this.unidadesService.incluirUnidade(this.unidade).subscribe(
        resp => {
          this.redirectPage();
          this.showSuccess("Unidade cadastrada com sucesso!");
        });
    }
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

  redirectPage(){
    this.redirectPage();
    this.router.navigateByUrl('/unidades');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
    // this.getEmpresas();
    // this.getFiliais();
  }

}
