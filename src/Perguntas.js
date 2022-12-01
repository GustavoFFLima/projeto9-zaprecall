import React from "react";
import VerPergunta from './assets/img/seta_play.png'
import VerResposta from './assets/img/seta_virar.png'
import styled from 'styled-components';

export default function Perguntas( {cards}) {

    function test(){
        return    alert("resposta")
    }

    return  <>
                {cards.map(cards => 
                    <>
                        <PerguntasStyled>
                            <p >Pergunta {cards.id}</p> 
                            <button>
                                <img src={VerPergunta} alt="icone da pergunta"/>
                            </button>
                        </PerguntasStyled>
                        <PerguntaStyled>
                            <p >{cards.question}</p> 
                            <img onClick={test} src={VerResposta} alt="icone da pergunta"/>
                        </PerguntaStyled>
                        <PerguntaStyled>
                            <p >{cards.answer}</p> 
                            <RespostaStyled>
                                <button>Não lembrei</button>
                                <button>Quase não lembrei</button>
                                <button>Zap!</button>
                            </RespostaStyled>
                        </PerguntaStyled>
                    </>
                )}
            </>
 }

const PerguntasStyled = styled.div`  
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
const PerguntaStyled = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const RespostaStyled = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
  }
`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/