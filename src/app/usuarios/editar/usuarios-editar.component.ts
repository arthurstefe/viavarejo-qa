import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.sass']
})
export class UsuariosEditarComponent implements OnInit {

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
    this.showSuccess("Usuário atualizado com sucesso!");
    this.redirectPage();
  }

  redirectPage(){
    this.router.navigateByUrl('/usuarios');
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

  // editarItem(item: ItensGestaoAcessoModel) {
  //   console.log(item);
  //   this.gestaoAcessosService.atualizarPerfis(item).subscribe(
  //     resp => {
  //       this.carregarLista();
  //     });
  // }


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
