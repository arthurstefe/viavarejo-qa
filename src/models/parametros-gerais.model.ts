export class ParametrosGeraisModel {
    przExpSenha: number;
    inativarUsuario: number;
    bloquearAcesso: number;
    inatividadeSessao: number;

    constructor(public params?:any) {
      params = params || {};
      this.przExpSenha = params.przExpSenha || 0;
      this.inativarUsuario = params.inativarUsuario || 0;
      this.bloquearAcesso = params.bloquearAcesso || 0;
      this.inatividadeSessao = params.inatividadeSessao || 0;
    }

}
