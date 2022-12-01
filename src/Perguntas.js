import React from "react";
import VerPergunta from './assets/img/seta_play.png'
import VerResposta from './assets/img/seta_virar.png'
import Selecionar from './Selecionar.js'
import styled from 'styled-components';

export default function Perguntas( {cards}) {

    function test(){
        return    alert("resposta")
    }

    function naoLembrei() {}
    function quaseaNaoLembrei(){}
    function zap(){}

    return  <>
                {cards.map(cards => 
                    <>
                        <PerguntasStyled>
                            <p >Pergunta {cards.id}</p> 
                            <button>
                                <img 
                                    src={VerPergunta} 
                                    alt="icone da pergunta"/>
                            </button>
                        </PerguntasStyled>
                        <PerguntaStyled>
                            <p >{cards.question}</p> 
                            <img 
                                onClick={test} 
                                src={VerResposta} 
                                alt="icone da pergunta"/>
                        </PerguntaStyled>
                        <RespostaStyled>
                            <p >{cards.answer}</p>
                            <Selecionar 
                                naoLembrei={naoLembrei} 
                                quaseaNaoLembrei={quaseaNaoLembrei} 
                                zap={zap}/>
                        </RespostaStyled>
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
    display: none;
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
    display: none;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const RespostaStyled = styled.div`
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
`
