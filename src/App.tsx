import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoadingR } from "./factures/LoadingR";
import { MarketPlace } from "./factures/marketplace/MarketPlace";
import { LoginComponen } from "./factures/auth/login/Login";
import { LoginWhatsComponen } from "./factures/auth/loginWhats/LoginWhts";
const App = () => {

  return (
    //  <LoadingR></LoadingR>


    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="/verify" replace />} />
        <Route path="/marketPlace" element={<MarketPlace />} />
        <Route  path="verify" element={<LoadingR />} />
        <Route path="/login" element={<LoginComponen />} />
        <Route path="/login-whats" element={<LoginWhatsComponen />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;