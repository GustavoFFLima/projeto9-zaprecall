import React from "react";
import Logo from "./Logo";
import Pergunta from './Pergunta';
import Contador from './Contador';
import styled from 'styled-components';

export default function App() {

  return (
    <AppStyled>
      <Logo />
      <Pergunta />
      <Contador />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`