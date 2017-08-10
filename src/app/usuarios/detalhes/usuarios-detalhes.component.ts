import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-usuarios-detalhes',
  templateUrl: './usuarios-detalhes.component.html',
  styleUrls: ['./usuarios-detalhes.component.sass']
})
export class UsuariosDetalhesComponent implements OnInit {

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

  delete(){
    this.closeModal();
    this.showSuccess("Usuário excluído com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
  }

  togglePass(input: any, element: any) {
    const attr = input.getAttribute('type');

    if (attr === 'password') {
      element.classList.add('show');
      input.setAttribute('type', 'text');
    } else {
      element.classList.remove('show');
      input.setAttribute('type', 'password');
    }
  }

}
