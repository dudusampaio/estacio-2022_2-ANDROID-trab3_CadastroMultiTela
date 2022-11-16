import React, { createContext, useState } from 'react';

export const CadastroContext = createContext({});

export default function ContextoCadastro({ children }) {
  const produtos = [
    {
      codigo: 1000,
      descricao: 'Iphone 13',
      preco: 7000,
      quantidade: 100,
    },
    {
      codigo: 1001,
      descricao: 'Notebook Dell Vostro',
      preco: 5000,
      quantidade: 800,
    },
    {
      codigo: 1002,
      descricao: 'Projetor Epson',
      preco: 4599.00,
      quantidade: 100,
    },
    { codigo: 1003, descricao: 'MacBook', preco: 9000.00, quantidade: 500 },
  ];

  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState();
  const [quantidade, setQuantidade] = useState();
  const [lista, setLista] = useState(produtos);

  const codigos = lista.map((l) => l.codigo);

  return (
    <CadastroContext.Provider
      value={{
        codigo,
        setCodigo,
        descricao,
        setDescricao,
        preco,
        setPreco,
        quantidade,
        setQuantidade,
        lista,
        setLista,
        codigos,
      }}>
      {children}
    </CadastroContext.Provider>
  );
}
