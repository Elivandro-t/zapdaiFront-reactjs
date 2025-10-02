import { createContext, useEffect, useState, type ReactNode } from "react";
import type { carrinhoType } from "../../types/carrinhoType";
import type { produto } from "../../types/produtos";
import { Logued } from "../../service/Logued";
import {notify} from "../../service/snackbarService"

type CartContextType = {
    carrinho: carrinhoType[];
    addItem: (item: produto, valor: number) => void;
    removeItem: (id: number) => void;
    removeItemLogado:()=>void
};
export const contextProduto = createContext<CartContextType | null>(null)

type children = {
    children: ReactNode
}
export const ProvaiderProdutos = ({ children }: children) => {
    const [carrinho, setCarrinho] = useState<carrinhoType[]>([])

    useEffect(() => {
        if(Logued()){
             const stored = localStorage.getItem("carrinho");
        if (stored) {
            setCarrinho(JSON.parse(stored));
        }
        }
       
    }, []);
    useEffect(() => {
        if(Logued()){
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
    }, [carrinho]);

    function removeItem(id: number) {
        setCarrinho((prev) => prev.filter((p) => p.produtoId !== id));
    }
     function removeItemLogado() {
        setCarrinho(()=>[]);
        localStorage.removeItem("carrinho");
    }
    
    function addItem(produto: produto, valor: number) {
        const novoItem: carrinhoType = {
            nomeProduto: produto?.productName,
            produtoId: produto?.idProduto,
            imageUrl: produto?.imgProduct,
            quantidade: valor,
            price: produto?.price,
            empresaId: produto?.empresaDTO.id,
            categoria: "",
            nomeCompania: produto?.empresaDTO?.nomeCompania,
        }
        setCarrinho((prev) => {
            // Se tiver item de empresa diferente, limpa carrinho
            if (prev.some((e) => e.empresaId !== novoItem.empresaId && e.produtoId !== novoItem.produtoId)) {
                alert("Produto de empresa diferente! Carrinho limpo.");
                return [novoItem];
            }

            const index = prev.findIndex((item) => item.produtoId === novoItem.produtoId);
            if (index >= 0) {
                // Atualiza quantidade
                const atualizado = [...prev];
                atualizado[index].quantidade += valor;
             notify("Produto adicionado ao carrinho","success")
                return atualizado;
            }

            return [...prev, novoItem];
        });

    }
    return (
        <contextProduto.Provider value={{ carrinho, addItem, removeItem,removeItemLogado }}>
            {children}
        </contextProduto.Provider>
    )
}