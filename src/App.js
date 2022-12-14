import React, { useState } from "react";
import PaginaSegundaria from './PaginaSegundaria';
import BoasVindas from './BoasVindas';
import { GlobalStyle } from './assets/css/GlobalStyle'
import styled from 'styled-components';

const cards = [
	{ id:1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ id:2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ id:3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ id:4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ id:5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ id:6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ id:7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ id:8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function App() {

  const [appIniciado, setAppIniciado] = useState(false)

  function iniciarApp(){
    setAppIniciado(true)
  }

  return (
    <>
    <GlobalStyle />
      <AppStyled>
        {!appIniciado ? 
          <BoasVindas iniciarApp={iniciarApp}/>
           :
          <PaginaSegundaria  cards={cards}/>}
      </AppStyled>
    </>
  );
}

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 80px;
`