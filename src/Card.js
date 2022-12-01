import { useState } from "react"
import styled from 'styled-components';
import VerResposta from './assets/img/seta_virar.png'
import Selecionar from './Selecionar.js'
import iconeErrado from './assets/img/icone_erro.png'
import iconeQuase from './assets/img/icone_quase.png'
import iconeCerto from './assets/img/icone_certo.png'


export default function Card( { cards, icone, setIcone, CorNPergunta, setCorNPergunta, contadorResposta, setContadorResposta }){

    const [cardAberto, setCardAberto] = useState(false)
    const [resposta, setResposta] = useState(false)

    function abrirPergunta(){
        setCardAberto(true)
    }

    function abrirResposta(){
        setResposta(true)
    }

    function naoLembrei(){
        console.log("oi")
        setContadorResposta(contadorResposta + 1)
        setCardAberto(false)
        setResposta(false)
        setIcone(iconeErrado)
        setCorNPergunta("#FF3030")
    }

    function quaseaNaoLembrei(){
        console.log("oi")
        setContadorResposta(contadorResposta + 1)
        setCardAberto(false)
        setResposta(false)
        setIcone(iconeQuase)
    }

    function zap(){
        console.log("oi")
        setContadorResposta(contadorResposta + 1)
        setCardAberto(false)
        setResposta(false)
        setIcone(iconeCerto)
    }
    
    return (
        <>
            {!resposta ? !cardAberto ? 
            <PerguntasStyled cor={CorNPergunta}>
                <p cor={CorNPergunta} >Pergunta {cards.id}</p> 
                <button onClick={abrirPergunta}>
                    <img 
                        src={icone} 
                        alt="icone da pergunta"/>
                </button>
            </PerguntasStyled> : 
            <PerguntaStyled>
                <p>{cards.question}</p> 
                <img
                    onClick={abrirResposta}
                    src={VerResposta} 
                    alt="icone da pergunta"/>
            </PerguntaStyled>
             :
            <RespostaStyled>
                <p >{cards.answer}</p>
                <Selecionar naoLembrei={naoLembrei} quaseaNaoLembrei={quaseaNaoLembrei} zap={zap}/>
            </RespostaStyled>}
        </>
    )
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
        color: ${props => props.cor};
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
