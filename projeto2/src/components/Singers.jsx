import React from 'react'

const Singers = ({id,name,gender,winner,position}) => {
  return (
    <div>
    <h2>O artista é: {name}</h2>
    <h2>O Estilo musical é: {gender}</h2>
    <h2>A posição do artista no meu coração é: {position}</h2>
    {winner && <h1> É vencedor em sua categoria</h1>}


    </div>
  )
}

export default Singers