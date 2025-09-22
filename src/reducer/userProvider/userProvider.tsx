import { createContext, useEffect, useState, type ReactNode } from "react";
type JwtCompany = {
  nome: string;
  id: string;
};
import {subjet} from "../../service/jwt/jwtservice"
type JwtPayload = {
  iss: string;             // Emissor do token
  usuarioId: number;       // ID do usuário
  sub: string;             // Email (subject)
  username: string;        // Nome completo
  roles: string[];         // Perfis (ex: ROLE_ADMIN)
  permissions: string[];   // Permissões do usuário
  company: JwtCompany[];   // Empresas vinculadas
  exp: number;             // Expiração (em segundos desde epoch)
};
type children = {
    children:ReactNode
}

export const contextProvider = createContext<JwtPayload|null>(null)

export const ProviderUser = ({children}:children)=>{
    const [usuario,setUser] = useState<JwtPayload | null>(null)
    useEffect(()=>{
      const data = subjet() as any;
      
      setUser(data)
    },[])
    return(
        <contextProvider.Provider value={usuario}>
            {children}
        </contextProvider.Provider>
    )
}