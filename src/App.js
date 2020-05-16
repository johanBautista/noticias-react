import React, { useState, Fragment, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=7f1b7d0ae7584ed9a712c25a2e63b6ac`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

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
