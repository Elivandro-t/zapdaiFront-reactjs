import Template from "./planosCss"
import { FootComponet } from "../../components/footer/Footter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadingSecundary } from "../../components/LoadingSecundary/LoadingSecundary";
import { HeaderSecund } from "../../components/header/headerSecundary/heandersecund";
const ZapDaiMarket: React.FC = () => {
  const plans = [
    { title: 'Plano Básico', price: 'R$29,90/mês', features: ['Chat ilimitado', 'Suporte 24h', 'Acesso básico'] },
    { title: 'Plano Profissional', price: 'R$59,90/mês', features: ['Tudo do básico', 'Analytics', 'Integração API'] },
    { title: 'Plano Premium', price: 'R$99,90/mês', features: ['Tudo do profissional', 'Consultoria', 'Prioridade no suporte'] },
  ];

  const partners = [
    { name: 'Empresa A', logo: 'https://via.placeholder.com/120x60?text=A' },
    { name: 'Empresa B', logo: 'https://via.placeholder.com/120x60?text=B' },
    { name: 'Empresa C', logo: 'https://via.placeholder.com/120x60?text=C' },
    { name: 'Empresa D', logo: 'https://via.placeholder.com/120x60?text=D' },
  ];
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false);
   const navegarMaket = ()=>{
        setLoading(true);
      setTimeout(()=>{
            navigate("/marketPlace",{ replace: true, state: { refresh: Date.now() } })
        },2000)
    }

  return (
    <Template.PageContainer>
      <HeaderSecund func={navegarMaket}></HeaderSecund>
      <Template.Section>
        <Template.SectionTitle>Planos ZapDai</Template.SectionTitle>
        <Template.PlansGrid>
          {plans.map((plan, i) => (
            <Template.PlanCard key={i} featured={i === 1}>
              <Template.PlanTitle>{plan.title}</Template.PlanTitle>
              <Template.PlanPrice>{plan.price}</Template.PlanPrice>
              <Template.PlanFeatures>
                {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </Template.PlanFeatures>
              <Template.Button>Assinar</Template.Button>
            </Template.PlanCard>
          ))}
        </Template.PlansGrid>
      </Template.Section>
      {loading &&
      <LoadingSecundary></LoadingSecundary>
      }
      <Template.Section>
        <Template.SectionTitle>Empresas Parceiras</Template.SectionTitle>
        <Template.PartnersGrid>
          {partners.map((p, i) => (
            <Template.PartnerCard >
              <img src={p.logo} alt={p.name} />
            </Template.PartnerCard>
          ))}
        </Template.PartnersGrid>
      </Template.Section>

      {/* <Template.Footer>
        © 2025 ZapDai - Todos os direitos reservados
      </Template.Footer> */}
      <FootComponet></FootComponet>
    </Template.PageContainer>
  );
};

export default ZapDaiMarket;