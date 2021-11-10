export const LOGIN = {
    BTN_CADASTRE    : '.btn.btn-link',
    URL             : '/login',
    INP_EMAIL       : '#email',
    INP_PASSWORD    : '#password',
    BTN_LOGIN       : '[data-testid="entrar"]',
    IMG             : '.imagem',
    TXT_LOGIN       : '.font-robot',
    TXT_CADASTRO    : '[class="message form-text"]',
    VALUES          : '[value=""]'
}

export const BODY_PROD = {
    BTN_CADASTRAR : '[data-testid=cadastrarProdutos]',
    INP_NOME : '#nome',
    INP_PRECO : '[data-testid=preco]',
    INP_DESCRICAO : '[data-testid=descricao]',
    INP_QUANTIDADE : '[data-testid=quantity]',
    BTN_IMG: '[data-testid=imagem]',
    BTN_CADASTRO : '[data-testid=cadastarProdutos]',
    DIV_ERRO : '//*[@id="root"]/div/div/div/form/div[1]'
}

export const CAD_USUARIO = {
    BTN_CADASTRE    : '.btn.btn-link',
    IMG             : '.imagem',
    URL             : '/cadastrarusuarios',
    INP_NOME        : '#nome',
    INP_EMAIL       : '#email',
    INP_SENHA       : '#password',
    ADD_NOME        : '#nome',
    ADD_EMAIL       : '[data-testid=email]', 
    ADD_SENHA       : '[data-testid=password]',
    ADD_ADMIN       : '[data-testid=checkbox]',
    FIN_CADASTRO    : '[data-testid=cadastrar]',

    INP_ALERT       : '.alert',
    TXT_ALERT       : '.alert > :nth-child(2)'
}