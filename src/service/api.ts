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
interface LoginRequest {
  email: string;
  password: string;
}
axios.interceptors.request.use((config:any)=>{
  const rotasPublicas= ["/categorias/lista",
    "/zapdai/v1/produtos/maisVendidos",
    "/zapdai/v1/empresas/lista",
    "/zapdai/v1/usuario/auth"
  ];
       const token = localStorage.getItem("acessToken")
        const urlPath = new URL(config.url, window.location.origin).pathname;
        console.log(urlPath)

   if (!rotasPublicas.some(rota => urlPath.includes(rota))) {
      if (!config.headers) config.headers = {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  return config;
},(erro)=>{
  return Promise.reject(erro)
})
const login = async(endpoint:string,body:any)=>{
  const response = await axios.post(base+endpoint,body);
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
    },
    login:async(data:any)=>{
      const json = await login("/zapdai/v1/usuario/auth",data);
      return json;
    }
}
export default api;