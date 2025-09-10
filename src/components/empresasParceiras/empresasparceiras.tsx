import Template from "./empresasParceiraCs"
import Api from "../../service/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import imagem from "../../assets/empresasPR.png"
export const EmpresasParceirasComponent = ()=>{
  const navigate = useNavigate()
  const [empresa,setEmpresa] = useState<any[]>()
      const rodaApi=async ()=>{
       const resposata =  await Api.findAll();
       setEmpresa(resposata);
      }
      useEffect(()=>{
          rodaApi();
      },[])
    const nav = (name:string)=>{
      navigate(`/empresa/${name}`)
    }
    return(
      <Template.Container>
        <Template.Titulo>
            <Template.H1>
                Empresas
            </Template.H1>
        </Template.Titulo>
        <Template.MainArea>
           {empresa?.flatMap(item=>(
            <Template.item onClick={()=>nav(item?.nomeCompania)}>
              <Template.imgEmpresa src={item?.avatar!=null?item.avatar:imagem}/>
              <Template.empresaName>{item?.nomeCompania}</Template.empresaName>
           </Template.item>
           ))}
        </Template.MainArea>
      </Template.Container>
    )
}