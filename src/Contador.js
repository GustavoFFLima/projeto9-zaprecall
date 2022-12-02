import styled from"styled-components";

export default function Contador( { cards, arrayRespostas } ) {
    return (
        <ContadorStyle data-test="footer">
            <p>{arrayRespostas.length}/{cards.length} CONCLUÍDOS</p>
            <ArrayRespostasStyle>
                {arrayRespostas.map(arrayRespostas => <img src={arrayRespostas} />)}
            </ArrayRespostasStyle>
        </ContadorStyle>
    )
 }
 
 const ContadorStyle = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    img {
        margin: 3px;
    }
`
const ArrayRespostasStyle = styled.div`
    display: flex;
`