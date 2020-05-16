import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  const [categoria, guardarCategoria] = useState('');
  console.log(categoria);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
    </Fragment>
  );
}

export default App;
