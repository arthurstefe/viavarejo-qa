export class AlterarSenhaModel {
    constructor(
        public login?: string,
        public senhaProvisoria?: string,
        public novaSenha?: string,
        public confirmeSenha?: string,
        public pergunta?: string,
        public resposta?: string
    ) { }
}
