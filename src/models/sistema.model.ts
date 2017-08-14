export class SistemaModel {
    sistema: string;
    status: number;

    constructor(public params?:any) {
      params = params || {};
      this.sistema = params.sistema || "";
      this.status = params.status || null;
    }

}
