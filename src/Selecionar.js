import styled from 'styled-components';

export default function Selecionar( {naoLembrei, quaseaNaoLembrei, zap}){
    
    return (
        <SelecionarStyled>
            <Button data-test="no-btn" onClick={naoLembrei} cor="#FF3030" >Não lembrei</Button>
            <Button data-test="partial-btn" onClick={quaseaNaoLembrei} cor="#FF922E" >Quase não lembrei</Button>
            <Button data-test="zap-btn" onClick={zap} cor="#2FBE34" >Zap!</Button>
        </SelecionarStyled>
    )
}

const SelecionarStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Button =styled.button`
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
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid  ${props => props.cor};
    padding:5px;
`
