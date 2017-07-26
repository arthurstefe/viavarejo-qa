export class ItensGestaoAcessoModel {
    id: string;
    nome: string;
    nivel: string;
    descricao: string;
    status: string;
    dataInclusao: any;
    dataUltimaAlteracao: any;
    subnivel: ItensGestaoAcessoModel[];

    editar: boolean;
    novo: boolean;
}
