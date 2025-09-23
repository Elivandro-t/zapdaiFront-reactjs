import axios from "axios"
const rotasPublicas= ["/categorias/lista",
    "/zapdai/v1/produtos/maisVendidos",
    "/zapdai/v1/empresas/lista",
    "/zapdai/v1/usuario/auth",
    "/zapdai/v1/usuario/envio-code",
    "/zapdai/v1/usuario/usuario-code",
    "/zapdai/v1/empresas/banner",
    "/zapdai/v1/produtos/unit"
    
  ];
const base = "https://api.zapdai.com";
import { notify } from "./snackbarService";
async function buscaApi(endpoint: string) {
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

axios.interceptors.request.use((config:any)=>{
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
const code_verify = async(endpoint:string,body:any)=>{
  const response = await axios.post(base+endpoint,body);
  return response.data;
}
const code_validation = async(endpoint:string,body:{code:number,token:string})=>{
  console.log("numero enviado "+body.code)
    const response = await axios.put(base+endpoint,{"code":body.code},{params:{tokenkey:body.token}})
    return response
}
const lista_banner = async(endpoint:string)=>{
  const response = await axios.get(base+endpoint);
  return response.data;
}

axios.interceptors.response.use(response=>{
    return response;
  
},(error)=>{
  if(error.response){
    const status = error.response.status;
    const data = error.response.data;
    switch(status){
      case 400:
        notify(data.message)
        break
      case 401:
         const msg = data.message || "Ocorreu um erro";
        notify(msg)
        console.log("status 401"+data.message)
        break
      case 403:
        console.log("status 403"+data)
        break
    }
  }
})

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
    },
    code:async(number:any)=>{
      const json = await code_verify("/zapdai/v1/usuario/envio-code",number);
      return json;
    },
    code_valid: async (code:number,token:string)=>{
        const json = await code_validation(`/zapdai/v1/usuario/usuario-code`,{code,token})
        return json;
    },
    banner: async()=>{
      const json = await lista_banner("/zapdai/v1/empresas/banner");
      return json;
    }
}


export default api;