import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UsuarioModel} from '../../../models/usuario.model';
import { UnidadeModel} from '../../../models/unidade.model';
import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-usuarios-detalhes',
  templateUrl: './usuarios-detalhes.component.html',
  styleUrls: ['./usuarios-detalhes.component.sass']
})
export class UsuariosDetalhesComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  showModal: boolean = false;
  public perfis: Array<any> = [];
  public empresas: Array<any> = [];
  public filiais: Array<any> = [];
  public cargos: Array<any> = [];
  public grupos: Array<any> = [];
  public empresaUsuario: UnidadeModel = new UnidadeModel();

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

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
    // this.route.params
    // .switchMap((params: Params) => this.usuariosService.getUsuario(+params['id']))
    // .subscribe((usuario) => this.usuario = new UsuarioModel(usuario));
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

  getPerfis(){
    this.usuariosService.getPerfis().subscribe(
      resp => {
        this.perfis = resp;
      });
  }

  getEmpresas(){
    this.usuariosService.getEmpresas().subscribe(
      resp => {
        this.empresas = resp;
      });
  }

  getFiliais(){
    this.usuariosService.getFiliais().subscribe(
      resp => {
        this.filiais = resp;
      });
  }

  getCargos(){
    this.usuariosService.getCargos().subscribe(
      resp => {
        this.cargos = resp;
      });
  }

  getGrupos(){
    this.usuariosService.getGrupos().subscribe(
      resp => {
        this.grupos = resp;
      });
  }


}
