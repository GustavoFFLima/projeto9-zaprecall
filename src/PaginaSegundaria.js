import { useState } from "react";
import Logo from "./Logo";
import Perguntas from './Perguntas';
import Contador from './Contador';

export default function PaginaSegundaria( {cards }){

    const [arrayRespostas, setArrayRespostas] = useState([])

    return (
        <>    
            <Logo />
            <Perguntas 
                cards={cards} 
                arrayRespostas={arrayRespostas} 
                setArrayRespostas={setArrayRespostas} />
            <Contador 
                cards={cards} 
                arrayRespostas={arrayRespostas} />
        </>
    )
}
