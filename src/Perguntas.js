import { useState } from "react";
import React from "react";
import Card from './Card'
import VerPergunta from './assets/img/seta_play.png'

export default function Perguntas( {cards, contadorResposta, setContadorResposta }) {

    const [icone, setIcone] = useState(VerPergunta)
    const {corNPergunta, setCorNPergunta} = useState("#00ff00")

    return  <>
                {cards.map(cards => 
                    <Card key={cards.id} cards={cards} icone={icone} setIcone={setIcone} corNPergunta={corNPergunta} setCorNPergunta={setCorNPergunta} contadorResposta={contadorResposta} setContadorResposta={setContadorResposta}/>
                )}
            </>
 }
