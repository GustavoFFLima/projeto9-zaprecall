import React from "react"
import ImgLogo from './assets/img/logo.png'
import styled from 'styled-components';

export default function Logo(){
    return (
        <LogoStyled>
            <img src={ImgLogo} />
            <h1>ZapRecall</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`