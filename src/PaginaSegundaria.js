import Logo from "./Logo";
import Pergunta from './Pergunta';
import Contador from './Contador';
import styled from 'styled-components';

export default function PaginaSegundaria( {cards}){
    return (
        <PaginaSegundariaStyled>    
            <Logo />
            <Pergunta cards={cards}/>
            <Contador />
        </PaginaSegundariaStyled>
    )
}

const PaginaSegundariaStyled = styled.div`
    display: columns;
`