import Logo from "./Logo";
import Perguntas from './Perguntas';
import Contador from './Contador';
import styled from 'styled-components';

export default function PaginaSegundaria( {cards}){
    return (
        <PaginaSegundariaStyled>    
            <Logo />
            <Perguntas cards={cards}/>
            <Contador />
        </PaginaSegundariaStyled>
    )
}

const PaginaSegundariaStyled = styled.div`
    display: columns;
`