import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UsuarioModel} from '../../../models/usuario.model';
import { UnidadeModel} from '../../../models/unidade.model';
import { PerfilModel } from '../../../models/perfil.model';
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

  fakeUser: UsuarioModel = new UsuarioModel({
    nome: 'José da Silva',
    perfil: {
      id: 1,
      idPerfil: 1,
      nome: 'Administrador TI',
      nivel: 1,
      descricao: 'Administrador TI',
      status: 1,
      funcionalidades: null
    },
    viaVarejo: 'Sim',
    dataInclusao: '01/05/17',
    dataUltimoAcesso: "13/08/17",
    situacao: 'Inativo',
    motivoBloqueio: 'Encerramento do contrato',
    dataBloqueio: "11/08/17",
    email: 'joao.silva@gmail.com',
    cpfCnjp: '000.456.789-10',
    rg: '11.111.111-1',
    empresa: 'HBSIS',
    filial: 'CD Jundiaí',
    cargo: 'Analista',
    dataNascimento: '01/08/17',
    orgaoExpedidor: 'DETRAN',
    telefones: [
      {
        tipo: 'Fixo',
        telefone: '2999-8888',
        ramal: '265'
      },
      {
        tipo: 'Celular',
        telefone: '98899-7878',
        ramal: ''
      }
    ]
  });

  fakeEmpresa: UnidadeModel = new UnidadeModel({
    id: 1,
    idUnidade: 'Unidade 1',
    nome: 'CD Nova',
    descricao: 'Empresa teste',
    cnpj: '01.001.456/0001-41',
    status: 1,
    origem: 'Não sei',
    dataInclusao: '01/01/17',
    dataNascimento: '01/01/17',
    dataUltimaAlteracao: '01/01/87',
    orgaoExpedidor: 'DETRAN',
    rg: '20.911.805-8',
    endereco: 'Rua 1, 10',
    tipo: 'Não sei',
    empresa: 'CD nova',
    contato: 'João',
    observacao: 'Nada',
  });


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

  redirectPage(){
    this.router.navigateByUrl('/usuarios');
  }

  deletarUsuario() {
    this.usuariosService.deletarUsuario(this.usuario).subscribe(
      resp => {
        this.showSuccess("Usuário excluído com sucesso!");
        this.closeModal();
        this.redirectPage();
      }
    );
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
    console.log(this.fakeUser);
    this.usuario = this.fakeUser;
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
