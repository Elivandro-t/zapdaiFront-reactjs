export type Pedido = {
  id: number;
  numeroDoPedido: string;
  StatusDoPedido: "AGUARDANDO_PAGAMENTO" | "PAGO" | "CANCELADO" | string;
  statusPagamento: "AGUARDANDO_PAGAMENTO" | "PAGO" | "CANCELADO" | string;
  preco: number | null;
  cupomDesconto: string | null;
  precoDesconto: number | null;
  dataDeCriacao:string;
  precoTotal: number;
  produtos:Produto[];
  historyStatusPedidos:historyStatusPedidos[]
};
export type Produto = {
  produtoId: number;
  amount: number;
  produtoName: string;
  imageURL: string;
  quantidade: number;
  id: number;
  empresa:empresa
};
export type historyStatusPedidos = {
 dataHora:string,
 status:string
}
type empresa = {
  nomeCompania:string
}