import Template from "./empresasParceiraCs"
import Api from "../../service/api"
import { useEffect, useState } from "react"
export const EmpresasParceirasComponent = ()=>{
  const [empresa,setEmpresa] = useState<any[]>()
      const rodaApi=async ()=>{
       const resposata =  await Api.findAll();
       setEmpresa(resposata);
      }
      useEffect(()=>{
          rodaApi();
      },[])
    return(
      <Template.Container>
        <Template.Titulo>
            <Template.H1>
                Empresas
            </Template.H1>
        </Template.Titulo>
        <Template.MainArea>
           {empresa?.flatMap(item=>(
            <Template.item>
              <Template.imgEmpresa src={item?.avatar}/>
              <Template.empresaName>{item?.nomeCompania}</Template.empresaName>
           </Template.item>
           ))}
        </Template.MainArea>
      </Template.Container>
    )
}