import React from "react";
import Setaplay from './assets/img/seta_play.png'
import styled from 'styled-components';

export default function Pergunta( {cards}) {
    return  <>
                {cards.map(cards => 
                    <PerguntaStyled>
                            <p >Pergunta {cards.id}</p> 
                            <button>
                                <img src={Setaplay} alt="icone da pergunta"/>
                            </button>
                    </PerguntaStyled>
                )}
            </>
 }

const PerguntaStyled = styled.div`  
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
        display: inline-block;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    button {
        border: none;
        background-color: #FFFFFF;
}
`