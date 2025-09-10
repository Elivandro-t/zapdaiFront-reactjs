import { useParams, useSearchParams } from "react-router-dom"
import { BannerSlider } from "../../components/ProdutoCarrossel/produtoCarrossel"
import Template from "./empresaCss"
import { ItensComponent } from "../../components/MainComponent/ItensProdutosComponent";
import { useRef } from "react";
export const Empresa = ()=>{
  const { name } = useParams();
  const emDestaqueRef = useRef<HTMLDivElement>(null);
  
    return(
          <Template.Container>
            <Template.HeaderComponet>
              <Template.AreaHeader>
                <Template.Logo>{name}</Template.Logo>
                <Template.LogoImagem imgem={"https://api.zapdai.com/zapdai/v1/empresas/logo_empresa/Ana%20Barbara%20Silva%20da%20Silva_1000_F_458152314_YNeAwbq1x7drSjWDRPJlwDObp1YRhdD9.jpg"}></Template.LogoImagem>
              </Template.AreaHeader>
              <Template.Imagem imgem={"https://api.zapdai.com/zapdai/v1/empresas/logo_empresa/Ana%20Barbara%20Silva%20da%20Silva_1000_F_458152314_YNeAwbq1x7drSjWDRPJlwDObp1YRhdD9.jpg"}></Template.Imagem>
            </Template.HeaderComponet>
             <Template.Banner_area>
              <Template.imagemITens>
                kckkckck
              </Template.imagemITens>
              <Template.BannerCarrossel>
                        <BannerSlider></BannerSlider>
                </Template.BannerCarrossel>
             </Template.Banner_area>
             <ItensComponent title={""} items={[]} ref={emDestaqueRef} ativo={false}></ItensComponent>
          </Template.Container>
    )
}