import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parametros-gerais',
  templateUrl: './parametros-gerais.component.html',
  styleUrls: ['./parametros-gerais.component.sass']
})
export class ParametrosGeraisComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  save(){
    this.showSuccess("Bloqueio/Inatividade salvo com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
  }

}
