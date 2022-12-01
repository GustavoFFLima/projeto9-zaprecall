import React from "react";
import Card from './Card'

export default function Perguntas( {cards}) {

    return  <>
                {cards.map(cards => 
                    <Card key={cards.id} cards={cards}/>
                )}
            </>
 }
