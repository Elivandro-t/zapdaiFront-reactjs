import { useEffect, useRef, useState } from "react"
import { EmpresasItens } from "../../../../components/MainComponent/ItensEmpresas"
import consulta from "../../../../service/api_cunsulto_produto"
import { CategoriaItens } from "../../../../components/MainComponent/categoria"
import { useLocation } from "react-router-dom"
export const Busca_categoria = ()=>{
      const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
  const categoria: string | null = queryParams.get("order")
    const empresaRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});
        const [categorias,setCategoria]=useState<any[]>()
    useEffect(()=>{
        const hendleApi = async()=>{
            const resposta = await consulta.categoria(categoria as any)
            setCategoria(resposta.content)
            console.log("data api "+JSON.stringify(resposta))
            console.log("categoria "+categoria)
        }
        hendleApi()
    },[categoria])
    return(
       <CategoriaItens title={""} items={categorias || []} ref={empresaRefs as any} ativo={false}></CategoriaItens>
    )
}

