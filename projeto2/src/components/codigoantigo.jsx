import logo from './logo.svg';
import './App.css';
import NewStates from './components/NewStates';
import ListRender from './components/ListRender';
import Events from './components/Events';
import PropsTest from './components/PropsTest';
import Destructing from './components/Destructing';



function App() {
  const nome = "Fidel Castro"
  return (
    <div className="App">
     
      <Events />
      <NewStates />
      <ListRender />
      < PropsTest name={nome} />
      < Destructing time="Marxista" estado="Cuba" posicao="Proletariado" campeao = {true} />

    </div>
  );
}

export default App;