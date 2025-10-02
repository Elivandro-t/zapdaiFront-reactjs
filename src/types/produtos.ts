export type produto = {
    idProduto: number;
    imgProduct: string;
    productName: string;
    price: number;
    peso: number;
    categoriaProduct: string | null;
    description: string;
    amountQTD: number;
    available: boolean;
    available_status: "DISPONIVEL" | "INDISPONIVEL";
    empresaDTO:{
        id:any,
        nomeCompania:string
    }
}