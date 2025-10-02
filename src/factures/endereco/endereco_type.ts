export type endereco_type =  {
    retirar:boolean;
    endereco?:endereco
}

export type endereco = {
    numeroEndereco:string,
    longitude:string,
    latitude:string,
    logradouro:string,
    estado_sigla:string,
    cep:string,
    bairro:string,
    cidade:string,
    pais:string,
    complemento:string
}