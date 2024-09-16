import React from 'react'

const Destructing = ({time, estado, posicao, campeao}) => {
  return (
    <div>

    <h2>O nome do time é: {time}</h2>
    <h2>Meu lugar é: {estado}</h2>
    <h2>Sua posição no meu coração é: {posicao}</h2>
    {campeao && <h1> A revolução chegara </h1>}

    </div>
  )
}

export default Destructing