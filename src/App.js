import logo from './logo.svg';
import './App.css';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import ClassComponent from './components/ClassComponent/ClassComponent';
import Titulo from './components/Titulo/Titulo';
import Item from './components/Item/Item';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import SuperForm from './components/Botones/SuperForm';
import ClassComponent from './components/ClassComponent/ClassComponent';
import CicloVida from './components/CicloVida/CicloVida';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const suma = () => {
    setContador(contador + 1);
  };
  const resta = () => {
    setContador(contador - 1);
  };
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Titulo titulo={'Mathh'} />
        <ClassComponent/>
        {
          contador < 5 ? (
            <CicloVida numero={contador} />
          ) : null
        }
        
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
      </header>
    </div>
  );
}

export default App;
