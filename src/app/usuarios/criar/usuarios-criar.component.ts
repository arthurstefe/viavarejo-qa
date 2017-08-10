import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-usuarios-criar',
  templateUrl: './usuarios-criar.component.html',
  styleUrls: ['./usuarios-criar.component.sass']
})
export class UsuariosCriarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  save(){
    this.showSuccess("Usuário cadastrado com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
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
