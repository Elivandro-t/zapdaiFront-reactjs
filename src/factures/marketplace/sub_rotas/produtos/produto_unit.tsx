import { useContext, useEffect, useState } from "react"
import Template from "./produto_unit_css"
import Api from "../../../../service/api_cunsulto_produto"
import {Logued} from "../../../../service/Logued"
import { LoadingSecundary } from "../../../../components/LoadingSecundary/LoadingSecundary";
import { useLocation, useNavigate } from "react-router-dom";
import { contextProduto } from "../../../../reducer/ProdutoProvaider/providerProdutos";
import type { produto } from "../../../../types/produtos";
// type produto = {
//     idProduto: number;
//     imgProduct: string;
//     productName: string;
//     price: number;
//     peso: number;
//     categoriaProduct: string | null;
//     description: string;
//     amountQTD: number;
//     available: boolean;
//     available_status: "DISPONIVEL" | "INDISPONIVEL";
//     empresaDTO:{
//         id:any
//     }
// }

export const ProdutosBuscaUnit = () => {
    const context = useContext(contextProduto)
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
            window.scrollTo(0, 0); // vai para o topo
        const consulta = async () => {
            const json = await Api.consulta_produto(id);
            if(json!==null){
                setProduto(json)
                setTotal(json.price)
                setLoading(false)
            }
        }
        consulta()

    }, [])
    const [produto, setProduto] = useState<produto | null>(null)
    const queryParams = new URLSearchParams(window.location.search);
    const id: any = queryParams.get("shared");
    const [valor, setValor] = useState(1)
    const [desabled, setDisabied] = useState(false)
    const [total, setTotal] = useState(produto?.price)

    const somaMais = () => {
        let valoritem = valor + 1;
        setDisabied(false)
        setValor(valoritem)
        setTotal(calcularValorMult(produto?.price, valoritem))
    }
    const somaMenos = () => {
        let novoValor = valor - 1;
        if (valor > 1) {
            setValor(novoValor)
            setTotal(novoValor * produto!.price)
        } else {
            setDisabied(true)
        }

    }
    const adicionarAoCarrinho = () => {
        context?.addItem(produto as produto,valor)

        
    }

    const calcularValorMult = (precoProduto: any, valorUnidade: number) => {
        return (precoProduto * valorUnidade);
    }
   function chamaLogin(){
     if(Logued()){
        adicionarAoCarrinho()
     }else{
        const from = location.pathname + location.search + location.hash;
        sessionStorage.setItem("redirectAfterLogin", from);
       navigate("/login")
     }
   }
    return (
        <Template.container>
            <Template.banner_Main>
                <Template.banner_left>
                    <Template.img src={produto?.imgProduct} />
                </Template.banner_left>
                <Template.banner_right>
                    <Template.h1>{produto?.productName}</Template.h1>
                    <Template.titulo>{produto?.description}</Template.titulo>
                    <Template.detalhes>
                        <Template.price>R$ {produto?.price.toFixed(2)}</Template.price>
                        <Template.Itens>
                            <Template.btn>{produto?.available_status}</Template.btn>
                            <Template.span>{produto?.amountQTD} Unidades</Template.span>
                        </Template.Itens>
                        <Template.Soma>
                            <Template.botaoSoma>
                                <Template.btnCalcular disabled={desabled} onClick={somaMenos}>-</Template.btnCalcular>
                                <Template.span>{valor}</Template.span>
                                <Template.btnCalcular onClick={somaMais}>+</Template.btnCalcular>
                            </Template.botaoSoma>
                        </Template.Soma>
                        <Template.precoTotal>
                            Total  {total?.toFixed(2)}
                        </Template.precoTotal>
                        <Template.Adicionar>
                            <Template.Adicionar_btn onClick={chamaLogin}>
                                Adicionar
                            </Template.Adicionar_btn>
                        </Template.Adicionar>
                    </Template.detalhes>
                    {loading&&
                      <LoadingSecundary></LoadingSecundary>
                    }
                </Template.banner_right>
            </Template.banner_Main>
            <Template.banner_botton>s</Template.banner_botton>
            

        </Template.container>
    )
}