export class DiretorioModel {
    tipo: string;
    diretorio: string;

    constructor(public params?:any) {
      params = params || {};
      this.tipo = params.tipo || "";
      this.diretorio = params.diretorio || "";

    }

}
