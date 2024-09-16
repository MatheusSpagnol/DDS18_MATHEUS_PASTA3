import React from 'react'
const teste = () =>{


    console.log("Funcionou dnv")
}

const Events = () => {
  return (
    <div>
        <button onClick={()=>console.log("Funcionou")}> Butao </button>
        <button onClick={(teste)}> Butao  </button>
    </div>
  )
}

export default Events