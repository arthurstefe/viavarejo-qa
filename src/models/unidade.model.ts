import { EnderecoModel } from './endereco.model';

export class UnidadeModel {
    id: number;
    idUnidade: number;
    nome: string;
    descricao: string;
    cnpj: string;
    status: number;
    origem: string;
    dataInclusao: string;
    dataUltimaAlteracao: string;
    endereco: EnderecoModel;
    tipo: string;
    empresa: string;
    contato: string;
    observacao: string;

    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.idUnidade = params.idUnidade || null;
      this.nome = params.nome || "";
      this.descricao = params.descricao || null;
      this.cnpj = params.cnpj || "";
      this.status = params.status || null;
      this.origem = params.origem || "";
      this.dataInclusao = params.dataInclusao || "";
      this.dataUltimaAlteracao = params.dataUltimaAlteracao || "";
      this.endereco = new EnderecoModel(params.endereco) || new EnderecoModel();
      this.tipo = params.tipo || "";
      this.empresa = params.empresa || null;
      this.origem = params.origem || "";
      this.contato = params.contato || null;
      this.observacao = params.observacao || "";
    }

}
