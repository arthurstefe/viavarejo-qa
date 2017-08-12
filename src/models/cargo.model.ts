export class CargoModel {
    id: number;
    descricao: string;
    status: number;
    dataInclusao: string;
    dataAlteracao: string;

    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.descricao = params.descricao || "";
      this.status = params.status || null;
      this.dataInclusao = params.dataInclusao || "";
      this.dataAlteracao = params.dataAlteracao || "";
    }

}
