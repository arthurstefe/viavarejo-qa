export class EnderecoModel {
    id: number;
    tipo: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: number;
    bairro: string;
    municipio: string;
    uf: string;
    pais: string;
    status: string;


    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.tipo = params.tipo || "";
      this.cep = params.cep || "";
      this.endereco = params.endereco || "";
      this.numero = params.numero || "";
      this.complemento = params.complemento || "";
      this.bairro = params.bairro || "";
      this.municipio = params.municipio || "";
      this.uf = params.uf || "";
      this.pais = params.pais || "";
      this.status = params.status || "";
    }

}
