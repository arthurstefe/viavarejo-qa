import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransportadoraModel } from '../../../models/transportadora.model';
import { TransportadorasService } from '../transportadoras.service';

@Component({
  selector: 'app-transportadoras-detalhes',
  templateUrl: './transportadoras-detalhes.component.html',
  styleUrls: ['./transportadoras-detalhes.component.sass']
})
export class TransportadorasDetalhesComponent implements OnInit {

  transportadora: TransportadoraModel = new TransportadoraModel();

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private transportadorasService: TransportadorasService) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
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
    this.route.params
    .switchMap((params: Params) => this.transportadorasService.getTransportadora(+params['id']))
    .subscribe((transportadora) => this.transportadora = new TransportadoraModel(transportadora));
  }

}
