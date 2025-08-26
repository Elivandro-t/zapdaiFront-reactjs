import { useEffect, useRef, useState } from "react";
import api from "../../service/api"
import {
  Main
} from "./mainCss";
import { ItensComponent } from "./ItensProdutosComponent";
import { EmpresasItens } from "./ItensEmpresas";
import React from "react";


export const MainComponent = () => {
  const maisVendidosRef = useRef<HTMLDivElement>(null);
  const [maisVendidos, setMaisVendidos] = useState<any[]>()
  const [todosOsProdutos, setTodos] = useState<any[]>()

  const emDestaqueRef = useRef<HTMLDivElement>(null);
  const empresaRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});
  const fetchMaisVendidos = async () => {
    try {
      const resposta = await api.buscaItens(); // Aguarda os dados
      setMaisVendidos(resposta);
    } catch (error) {
      console.error("Erro ao buscar mais vendidos:", error);
    }
  };
  const fetchTodos = async () => {
    try {
      const resposta = await api.findAll(); // Aguarda os dados
      console.log("meus itens", resposta);
      setTodos(resposta);
    } catch (error) {
      console.error("Erro ao buscar mais vendidos:", error);
    }
  };
  useEffect(() => {
    fetchMaisVendidos();
    fetchTodos();
  }, [])


  const emDestaque = [
    { id: 4, nome: "Pizza Grande", preco: "R$ 39,90", info: "Entrega rápida", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" },
    { id: 5, nome: "Lasanha Caseira", preco: "R$ 29,90", info: "Serve 2 pessoas", imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg" },
    { id: 6, nome: "Sorvete 2L", preco: "R$ 19,90", info: "Vários sabores", imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg" },
  ];


  return (
    <Main>
      <ItensComponent title={"🔥Top 10 Mais Vendidos"} items={maisVendidos || []} ref={maisVendidosRef as any} ativo={false} ></ItensComponent>
      <ItensComponent title={"⭐ Em Destaque"} items={emDestaque} ref={emDestaqueRef as any} ativo={false} ></ItensComponent>
      {todosOsProdutos?.filter(Boolean).map((empresa) => {
        if (!empresaRefs.current[empresa.idEmpresa]) {
          empresaRefs.current[empresa.idEmpresa] = React.createRef<HTMLDivElement>() as any;
        }
        return (
          <EmpresasItens
            key={empresa.idEmpresa}
            title={`👀 ${empresa.nomeCompania}`}
            items={empresa.produtos || []}
            ref={empresaRefs.current[empresa.idEmpresa]}
            ativo={true} empresa={empresa}          />
        );
      })}
    </Main>
  );
};
