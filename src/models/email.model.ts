export class EmailModel {
    tipo: string;
    email: string;

    constructor(public params?:any) {
      params = params || {};
      this.tipo = params.tipo || "";
      this.email = params.email || "";

    }

}
