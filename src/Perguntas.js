import React from "react";
import Card from './Card'

export default function Perguntas( {cards, contadorResposta, setContadorResposta, arrayRespostas, setArrayRespostas, arrayIconRespostas, setArrayIconRespostas }) {

    return  <>
                {cards.map(cards => 
                    <Card
                        key={cards.id} 
                        cards={cards} 
                        contadorResposta={contadorResposta} 
                        setContadorResposta={setContadorResposta} 
                        arrayRespostas={arrayRespostas} 
                        setArrayRespostas={setArrayRespostas}
                        arrayIconRespostas={arrayIconRespostas}
                        setArrayIconRespostas={setArrayIconRespostas}/>
                )}
            </>
 }
