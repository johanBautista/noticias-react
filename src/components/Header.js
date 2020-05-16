import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Titulo = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  color: white;
  text-align: center;
  font-size: 4.8rem !important;
`;

const Header = ({ titulo }) => {
  return (
    <div className="nav-wrapper header">
      <a href="#!" className="brand-logo">
        <Titulo>{titulo}</Titulo>
      </a>
    </div>
  );
};

Header.protoTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
