export class LoginModel {
    constructor(
        public login?: string,
        public senha?: string,
        public empresa?: string,
        public captcha?: string
    ) { }
}
