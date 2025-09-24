import type { PedidoPagamento } from "../../types/pagamento/payment";
import axios from "axios";
const base = "http://localhost:8085";

const Pagamento = async(endpoint:string,data:PedidoPagamento)=>{
     const resposta = await axios.post(base+endpoint,data);

     return resposta.data;
}
const Api = {
    pagamento:async(data:PedidoPagamento)=>{
        const json = await Pagamento("/zapdai/v1/pedidos/pagamento_pedido",data);
        return json;
    }
}
export default Api;