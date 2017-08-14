export class TelefoneModel {
    tipo: string;
    telefone: string;
    ramal: string;

    constructor(public params?:any) {
      params = params || {};
      this.tipo = params.tipo || "";
      this.telefone = params.telefone || "";
      this.ramal = params.ramal || "";
    }

}
