export class AlterarSenhaModel {
    constructor(
        public login?: string,
        public senhaProvisoria?: string,
        public novaSenha?: string,
        public confimeSenha?: string,
        public pergunta?: string,
        public resposta?: string
    ) { }
}
