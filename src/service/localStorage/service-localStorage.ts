export default{
    salva_token:(token:string)=>{
        localStorage.setItem("acessToken",token)
    },
    logout:()=>{
        localStorage.removeItem("acessToken")
    }
}