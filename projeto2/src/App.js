import { useState } from 'react';
import './App.css';
import Singers from './components/Singers';



function App() {
  const nome = "Fidel Castro"

  const [cantores] = useState([
    {id:1, name:"Raul Seixas", gender:"Rock nacional", winner:true, position: 1},
    {id:2, name:"Clarice Falcão", gender:"mpb", winner:true, position: 2},
    {id:3, name:"Alceu Valença ", gender:"Forró", winner:false, position: 1000},

  ])

  return (
    <div className="App">
      {
        cantores.map(
          (cantor) => (
            <Singers 
            
            key={cantor.id}
            name={cantor.name} 
            gender={cantor.gender} 
            winner={cantor.winner}
            position={cantor.position}
            />
          ))}

     
    </div>
  );
}

export default App;
