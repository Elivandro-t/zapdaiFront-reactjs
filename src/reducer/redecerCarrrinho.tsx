import React, { createContext, useReducer, type ReactNode } from "react"

type props={
    data:state,
    setData:React.Dispatch<active>
}
interface state {
    produto:produto|null
}


interface active {
    type:"valor",
    payload:produto
}

type produto = {
    quantidade:string
}

interface children{
    children:ReactNode
}
export  const ContextCarrinho = createContext<props|null>(null);
const initialState = {
    produto:null,
}

export const ProvederContextCarrinho = ({children}:children)=>{
    const [data,setData] = useReducer(UserReducerCarrinho,initialState)
    return(
        <ContextCarrinho.Provider value={{data,setData}}>
             {children}
        </ContextCarrinho.Provider>
    )
}

const UserReducerCarrinho = (state:state,active:active):state=>{
    switch(active.type){
        case "valor":
            return {...state,produto:active.payload as any}
        
    }
    return state;

}