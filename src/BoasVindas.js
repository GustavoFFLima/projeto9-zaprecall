import styled from 'styled-components';
import ImgLogo from './assets/img/logo.png'

export default function BoasVindas(){
    return (
        <>
            <BoasVindasStyled>
            <img src={ImgLogo} alt="logo do ZapRecall"/>
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
            </BoasVindasStyled>
        </>
    )
}

const BoasVindasStyled = styled.div`
    display: none;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 136px;
        height: 161px;
        margin-left: 60px;
    }
    h1 {
        margin-left: 50px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
    }
    button {
        width: 246px;
        height: 54px;

        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`