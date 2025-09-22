import {BtnLogin} from "./btnCss"
type props = {
    titulo:string,
    nome_btn:String,
    click:()=>void,
      isvalid:boolean

}
export const Btn = (prop:props)=>{
    return(
        <BtnLogin disabled={prop.isvalid} onClick={prop.click} login={prop.isvalid?"code":"default"} >{prop.titulo}</BtnLogin>
    )
}