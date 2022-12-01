import { useState } from "react";
import Logo from "./Logo";
import Perguntas from './Perguntas';
import Contador from './Contador';

export default function PaginaSegundaria( {cards }){

    const [contadorResposta, setContadorResposta] = useState(0)

    return (
        <>    
            <Logo />
            <Perguntas cards={cards} contadorResposta={contadorResposta} setContadorResposta={setContadorResposta}/>
            <Contador cards={cards} contadorResposta={contadorResposta}/>
        </>
    )
}
