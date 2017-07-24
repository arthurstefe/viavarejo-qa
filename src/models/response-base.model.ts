export interface ResponseBaseModel {
    mensagens: [{
        codigo: number,
        conteudo: string;
        tipo: string;
    }];
    protocolo: string;
    valido: boolean;
}
