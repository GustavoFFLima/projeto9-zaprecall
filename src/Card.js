import { useState } from "react"
import styled from 'styled-components';
import VerResposta from './assets/img/seta_virar.png'
import Selecionar from './Selecionar.js'
import VerPergunta from './assets/img/seta_play.png'
import iconeErrado from './assets/img/icone_erro.png'
import iconeQuase from './assets/img/icone_quase.png'
import iconeCerto from './assets/img/icone_certo.png'


export default function Card( { cards, arrayRespostas, setArrayRespostas }){

    const [cardAberto, setCardAberto] = useState(false)
    const [resposta, setResposta] = useState(false)
    const [icone, setIcone] = useState(VerPergunta)
    const [corNPergunta, setCorNPergunta] = useState("#000000")
    const [textDecoration, setTextDecoration] = useState("none")
    const [desabilitar, setDesabilitar] = useState(false)
    const [status, setStatus] = useState("")

    let respostasFeitas = []

    function abrirPergunta(){
        setCardAberto(true)
    }

    function abrirResposta(){
        setResposta(true)
    }

    function naoLembrei(){
        respostasFeitas = [...arrayRespostas, iconeErrado]
        setArrayRespostas(respostasFeitas)
        console.log(arrayRespostas)
        setCardAberto(false)
        setResposta(false)
        setDesabilitar(true)
        setIcone(iconeErrado)
        setStatus("no-icon")
        setCorNPergunta("#FF3030")
        setTextDecoration("line-through")
    }

    function quaseaNaoLembrei(){
        respostasFeitas = [...arrayRespostas, iconeQuase]
        setArrayRespostas(respostasFeitas)
        setCardAberto(false)
        setResposta(false)
        setDesabilitar(true)
        setIcone(iconeQuase)
        setStatus("partial-icon")
        setCorNPergunta("#FF922E")
        setTextDecoration("line-through")
    }

    function zap(){
        respostasFeitas = [...arrayRespostas, iconeCerto]
        setArrayRespostas(respostasFeitas)
        setCardAberto(false)
        setResposta(false)
        setDesabilitar(true)
        setIcone(iconeCerto)
        setStatus("zap-icon")
        setCorNPergunta("#2FBE34")
        setTextDecoration("line-through")
    }
    
    return (
        <>
            {!resposta ? !cardAberto ? 
            <PerguntasStyled 
                cor={corNPergunta} 
                texto={textDecoration}
            >
                <p data-test="flashcard-text" >Pergunta {cards.id}</p> 
                <button data-test="play-btn" onClick={abrirPergunta} disabled={desabilitar}>
                    <img
                        data-test={status} 
                        src={icone} 
                        alt="icone da pergunta"/>
                </button>
            </PerguntasStyled> : 
            <PerguntaStyled>
                <p data-test="flashcard-text" >{cards.question}</p> 
                <img
                    data-test="turn-btn"
                    onClick={abrirResposta}
                    src={VerResposta} 
                    alt="icone da pergunta"/>
            </PerguntaStyled>
             :
            <RespostaStyled>
                <p data-test="flashcard-text" >{cards.answer}</p>
                <Selecionar 
                    naoLembrei={naoLembrei} 
                    quaseaNaoLembrei={quaseaNaoLembrei} 
                    zap={zap}
                />
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
        text-decoration: ${props => props.texto};
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
