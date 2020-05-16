import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.input`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #004e92;
  border: none;
  width: 40%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000428;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const buscarNoticias = (e) => {
    e.preventDefault();
    console.log('hola');
  };

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <form className="form" onSubmit={buscarNoticias}>
          <input type="text" />
          <Boton className="" type="submit" value="BUSCAR" />
        </form>
      </div>
    </div>
  );
};

export default Formulario;
