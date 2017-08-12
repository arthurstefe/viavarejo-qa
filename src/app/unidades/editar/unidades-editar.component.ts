import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-editar',
  templateUrl: './unidades-editar.component.html',
  styleUrls: ['./unidades-editar.component.sass']
})
export class UnidadesEditarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
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
    this.redirectPage();
    this.showSuccess("Unidade atualizada com sucesso!");
  }

  redirectPage(){
    this.router.navigateByUrl('/unidades');
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
