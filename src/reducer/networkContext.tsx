import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type NetworkContextType = {
    isOnline:boolean
}
export const NetProvider = createContext<NetworkContextType|undefined>(undefined)
export const NetWorkContext = ({children}:{children:ReactNode})=>{
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(()=>{
      const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    },[])
    return(
        <NetProvider.Provider value={{isOnline}}>
              {children}
               {/* Componente global de alerta */}
      {!isOnline && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height:"100vh",
            backgroundColor: " rgba(255, 165, 0, 0.1)",
            color: "white",
            textAlign: "center",
            padding: "10px",
            zIndex: 9999,
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <div  style={{
            position: "fixed",
            backgroundColor: "#503e0d",
            color: "white",
            textAlign: "center",
            padding: "30px",
            borderRadius:'5px',
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>❌ Sem conexão com a internet</div>
        </div>
      )}
        </NetProvider.Provider>
    )
}
export const useNetwork = () => {
  const context = useContext(NetProvider);
  if (!context) throw new Error("useNetwork deve ser usado dentro do NetworkProvider");
  return context;
};