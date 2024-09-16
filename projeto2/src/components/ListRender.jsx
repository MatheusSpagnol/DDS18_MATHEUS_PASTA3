


import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Marcos", "Lucas", "João"]);

    const[players] = useState([
        { id: 1, name: "Marina", number: 30, nacio: "Brasil"},
        { id: 2, name: "Ciro", number: 12, nacio: "Panama"},
        { id: 3, name: "Lula", number: 13, nacio: "Cuba"},
        { id: 4, name: "Bolsonaro", number: 22, nacio: "Italia Facista"}
    ])



    return (
    <div>
        <ul>
            {list.map( (item, index) => (<li   key= {index} > {item}
              
            </li>))}
        </ul>

            <ol>
                {players.map((jogador) =>(
                    <li key={jogador.id}>
                        {jogador.name} - Camisa  {jogador.number} - {jogador.nacio}
                        </li>
                ))}
            </ol>


    </div>);
 
}

export default ListRender