import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransportadoraModel } from '../../../models/transportadora.model';
import { TransportadorasService } from '../transportadoras.service';
import { NgForm } from '@angular/forms';
import { EnderecoModel } from '../../../models/endereco.model';
import { EmailModel } from '../../../models/email.model';
import { TelefoneModel } from '../../../models/telefone.model';
import { DiretorioModel } from '../../../models/diretorio.model';

@Component({
  selector: 'app-transportadoras-editar',
  templateUrl: './transportadoras-editar.component.html',
  styleUrls: ['./transportadoras-editar.component.sass']
})
export class TransportadorasEditarComponent implements OnInit {

  transportadora: TransportadoraModel = new TransportadoraModel();
  formInvalid: boolean;
  showModal: boolean = false;

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private transportadorasService: TransportadorasService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  atualizarTransportadora(f, transportadora: TransportadoraModel) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      this.transportadora = new TransportadoraModel(transportadora);
      this.transportadorasService.atualizarTransportadora(transportadora).subscribe(
        resp => {
          this.showSuccess("Transportadora atualizada com sucesso!");
          this.redirectPage();
        }
      );
    }
  }

  deletarTransportadora() {
    this.transportadorasService.deletarTransportadora(this.transportadora).subscribe(
      resp => {
        this.showSuccess("Transportadora excluída com sucesso!");
        this.redirectPage();
      }
    );
  }

  redirectPage(){
    this.router.navigateByUrl('/unidades');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
    // this.route.params
    // .switchMap((params: Params) => this.transportadorasService.getTransportadora(+params['id']))
    // .subscribe((transportadora) => this.transportadora = new TransportadoraModel(transportadora));
  }

}
