export interface AlterarSenhaModel {
    id: number;
    login: string;
    senhaProvisoria: string;
    senhaAtual: string;
    novaSenha: string;
    confirmeSenha: string;
    pergunta: string;
    resposta: string;
    chave: string;
}
