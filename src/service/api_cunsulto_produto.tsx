import axios from "axios"
const base = "http://localhost:8085"



const consulta_produto = async(endpoint:string)=>{
    const resposta = await axios.get(base+endpoint)
    return resposta.data

}
const lista_pedidos = async(endpoint:string,numero:number)=>{
    const resposta =  await axios.get(base+endpoint,{params:{usuarioId:numero}});
    return  resposta.data;
}
const search_pedidos = async(endpoint:string,body:{numeroDoPedido:string,usuarioId:number})=>{
    const resposta =  await axios.post(base+endpoint,body);
    return  resposta.data;
}


const consulta = {
   consulta_produto: async(id:number)=>{
       const json = await consulta_produto(`/zapdai/v1/produtos/unit/${id}`);
       return json;
   },
   pedidos:async(usuarioID:any)=>{
       const json = await lista_pedidos("/zapdai/v1/pedidos",usuarioID);
       return json;
   },
   pedidos_busca:async(usuarioId:number,numeroDoPedido:string)=>{
       const json = await search_pedidos("/zapdai/v1/pedidos/search",{numeroDoPedido,usuarioId});
       return json;
   }
}

export default consulta;