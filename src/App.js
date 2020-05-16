import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="">
      <Header titulo="Buscador de Noticias" />
      <div className="container">
        <Formulario />
      </div>
    </div>
  );
}

export default App;
