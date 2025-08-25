import React, { createContext, useReducer, type ReactNode } from "react"

type props={
    data:state,
    setData:React.Dispatch<active>
}
interface state {
    user:user|null,
    token:any
}


interface active {
    type:"name"|"auth",
    payload:user|token
}

type user = {
    name:String
}
type token = {
    token:String
}
interface children{
    children:ReactNode
}
export  const ContextUser = createContext<props|null>(null);
const initialState = {
    user:null,
    token:null
}

export const ProvederContext = ({children}:children)=>{
    const [data,setData] = useReducer(userReducer,initialState)
    return(
        <ContextUser.Provider value={{data,setData}}>
             {children}
        </ContextUser.Provider>
    )
}

const userReducer = (state:state,active:active):state=>{
    switch(active.type){
        case "name":
            return {...state,user:active.payload as any}
        case "auth":
            return {...active,token:active.payload} as any
    }
    return state;

}