import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-unidades-criar',
  templateUrl: './unidades-criar.component.html',
  styleUrls: ['./unidades-criar.component.sass']
})
export class UnidadesCriarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  save(){
    this.showSuccess("Unidade atualizada com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
  }

}
