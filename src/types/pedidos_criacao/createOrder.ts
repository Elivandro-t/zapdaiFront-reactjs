
export type Order = {
      usuarioId: number,
  empresaId: string;
  retirarNaLoja: boolean,
  produtos:produtos[
    
  ],
  endereco?:endereco
}
 
 type produtos =  {
      produtoId:number,
      quantidade:number
      id:number
}

 type endereco = {

    numeroEndereco:string;
    longitude:string;
    latitude:string;
    logradouro:string;
    estado_sigla:string;
    cep:string;
    bairro:string;
    cidade:string;
    pais:string;
    complemento:string
 }
