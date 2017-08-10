import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-transportadoras-criar',
  templateUrl: './transportadoras-criar.component.html',
  styleUrls: ['./transportadoras-criar.component.sass']
})
export class TransportadorasCriarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  save(){
    this.showSuccess("Transportadora atualizada com sucesso!");
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

}
