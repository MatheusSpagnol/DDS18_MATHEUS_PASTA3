import { useState } from "react"



const NewStates = () => {
    let valor = 10
    console.log(valor)
 
    const [number, setNumber] = useState(0)
    console.log(number)
    return(
        <div>
            <p>Valor: {valor}</p>
            <button onClick={() =>(valor=20)}>Aumentar valor</button>

           <p>Valor com UseState: {number}</p>
           <button onClick={()=>(setNumber(number + 15))}> Aumenta valor</button>

        </div>
    )
}

export default NewStates;