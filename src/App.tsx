import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoadingR } from "./factures/LoadingR";
import { MarketPlace } from "./factures/marketplace/MarketPlace";
import { LoginComponen } from "./factures/auth/login/Login";
import { LoginWhatsComponen } from "./factures/auth/loginWhats/LoginWhts";
import { ProtectedRoute } from "./service/ProtectedRoute";
import { Empresa } from "./factures/empresa/empresa";
import { Verify_code } from "./factures/auth/verify-code/verify_code";
import { ProdutosBuscaUnit } from "./factures/marketplace/sub_rotas/produtos/produto_unit";
import { MainComponent } from "./components/MainComponent/MainComponet";
import ZapDaiMarket from "./factures/melhoresPlanos/MarcketPlano";
import { MeusPedidos } from "./factures/pedidos/meus_pedidos/meus_pedidos";
import { NotFoundPage } from "./factures/404/NotFund";
import PedidoDetalhes from "./factures/pedidos/detalhes_pedidos/detalhes_pedidos";
import CheckoutPedidos from "./factures/pedidos/checkout/checkout";
import ResumoPedidos from "./factures/pedidos/Resumo_de_Compra/Resumo";
import { Busca_categoria } from "./factures/marketplace/sub_rotas/buscas_categoria/busca_categoria";
import { Endereco } from "./factures/endereco/endereco";
import { CookiesBanner } from "./components/cookies/CookiesComponets";
import { HomeComponent } from "./factures/auth/teste/home";
const App = () => {

  return (
    //  <LoadingR></LoadingR>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/verify" replace />} />
        <Route  path="/marketPlace"
          element={
            <MarketPlace key={Date.now()} />
          } >
          <Route  path="produtos" element={<ProdutosBuscaUnit />} />
          <Route  path="categorias" element={<Busca_categoria />} />
          <Route index  element={<MainComponent/>}/>
        </Route>
        <Route index path="verify" element={<LoadingR />} />
        <Route path="/login" element={<LoginComponen />} />
        <Route path="/login-whats" element={<LoginWhatsComponen />} />
        <Route path="/empresa/:name" element={<Empresa />} />
        <Route path="/code" element={<Verify_code />} />
        <Route path="/melhores-planos" element={<ZapDaiMarket key={Date.now()} />}/>

        <Route path="/teste" element={<HomeComponent key={Date.now()} />}/>
        <Route path="/meus-pedidos" element={
          <ProtectedRoute>
            <MeusPedidos key={Date.now()} 
          />
          </ProtectedRoute>
          }/>
          <Route path="/detalhes-pedido" element={
          <ProtectedRoute>
            <PedidoDetalhes key={Date.now()} 
          />
          </ProtectedRoute>
          }/>
          <Route path="/pagamento-pedidos/checkout" element={
          <ProtectedRoute>
            <CheckoutPedidos key={Date.now()} 
          />
          </ProtectedRoute>
          }/>
          <Route path="/resumo_pedidos/payment" element={
          <ProtectedRoute>
            <ResumoPedidos key={Date.now()} 
          />
          </ProtectedRoute>
          }/>
          <Route path="/forma-entrega" element={
          <ProtectedRoute>
            <Endereco key={Date.now()} 
          />
          </ProtectedRoute>
          }/>
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;