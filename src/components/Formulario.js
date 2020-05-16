import React from 'react';
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';

const Boton = styled.input`
  /* margin-top: 10px; */
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 13px;
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

const Formulario = ({guardarCategoria}) => {
  const Opciones = [
    { value: 'genera', label: 'General' },
    { value: 'bussiness', label: 'Negocios' },
    { value: 'health', label: 'Salud' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
    { value: 'science', label: 'Ciencia' },
    { value: 'entertainment', label: 'Entretenimiento' },
  ];

  const [categoria, SelectNoticias] = useSelect('general', Opciones);

  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <form className="form" onSubmit={buscarNoticias}>
          <SelectNoticias />
          <Boton className="" type="submit" value="BUSCAR" />
        </form>
      </div>
    </div>
  );
};

export default Formulario;
