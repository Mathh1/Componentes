
import './App.css';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import ClassComponent from './components/ClassComponent/ClassComponent';
import Titulo from './components/Titulo/Titulo';
// import Item from './components/Item/Item';
// import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import NavBar from './components/NavBar/NavBar';
// import CartWidget from './components/CartWidget/CartWidget';
// import SuperForm from './components/Botones/SuperForm';
// import ClassComponent from './components/ClassComponent/ClassComponent';
// import CicloVida from './components/CicloVida/CicloVida';
// import { useState } from 'react';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Titulo titulo={'Mathh'} />
        <ItemListContainer greeting="a"/>
      </header>
    </div>
  );
}

export default App;
