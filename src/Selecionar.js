import styled from 'styled-components';

export default function Selecionar( {naoLembrei, quaseaNaoLembrei, zap}){
    
    return (
        <SelecionarStyled>
            <button onClick={naoLembrei}>Não lembrei</button>
            <button onClick={quaseaNaoLembrei}>Quase não lembrei</button>
            <button onClick={zap}>Zap!</button>
        </SelecionarStyled>
    )
}

const SelecionarStyled = styled.div`
    display: flex;
    flex-direction: row;
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
        background: #FF3030;
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