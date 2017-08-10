import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-unidades-editar',
  templateUrl: './unidades-editar.component.html',
  styleUrls: ['./unidades-editar.component.sass']
})
export class UnidadesEditarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  save(){
    this.showSuccess("Unidade atualizada com sucesso!");
  }

  delete(){
    this.closeModal();
    this.showSuccess("Unidade excluída com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
  }

}
