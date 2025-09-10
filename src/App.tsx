import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoadingR } from "./factures/LoadingR";
import { MarketPlace } from "./factures/marketplace/MarketPlace";
import { LoginComponen } from "./factures/auth/login/Login";
import { LoginWhatsComponen } from "./factures/auth/loginWhats/LoginWhts";
import { ProtectedRoute } from "./service/ProtectedRoute";
import { Empresa } from "./factures/empresa/empresa";
const App = () => {
   
  return (
    //  <LoadingR></LoadingR>


    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navigate to="/verify" replace />} />
        <Route index path="/marketPlace" 
        element={
            <MarketPlace key={Date.now()}/>        
        } />
        <Route index  path="verify" element={<LoadingR />} />
        <Route path="/login" element={<LoginComponen />} />
        <Route path="/login-whats" element={<LoginWhatsComponen />} />
        <Route path="/empresa/:name" element={<Empresa />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;