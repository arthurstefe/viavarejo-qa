export class PerfilModel {
    id: number;
    idPerfil: number;
    nivel: string;
    nome: string;
    descricao: string;
    status: number;
    funcionalidades: string;
    dataInclusao: string;

    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.idPerfil = params.idPerfil || null;
      this.nivel = params.nivel || "";
      this.nome = params.nome || null;
      this.descricao = params.descricao || "";
      this.status = params.status || null;
      this.funcionalidades = params.funcionalidades || "";
      this.nome = params.nome || "";
      this.dataInclusao = params.dataInclusao || "";
    }

}
