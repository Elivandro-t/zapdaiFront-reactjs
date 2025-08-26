import axios from "axios"
const base = "https://api.zapdai.com";
const buscaApi = async(endpoint:string)=>{
    try {
    const response = await axios.get(`${base}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }

}
const todosItens = async(endpoint:string)=>{
    try {
    const response = await axios.get(`${base}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }

}
const categorias = async(endpoint:string)=>{
  const response = await axios.get(base+endpoint);
  return response.data;
}

const api = {
    buscaItens:async ()=>{
        const json = await buscaApi("/zapdai/v1/produtos/maisVendidos");
        return json;

    },
    findAll:async ()=>{
      const json =  await todosItens("/zapdai/v1/empresas/lista");
      return json;
    },
    categorias:async()=>{
      const json = await categorias("/categorias/lista");
      return json;
    }
}
export default api;