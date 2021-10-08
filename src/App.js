import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';


const Contenedor = styled.div`
  max-width:600px;
  margin: 0 auto;
  `;

  const ContenedorFormulario = styled.div`
  background-color:#f2f2f2;
  padding:3rem;
  `;

function App() {

  return (
    
    <Contenedor>  
      <Header />  
      <ContenedorFormulario>  
      <Formulario/>
      </ContenedorFormulario>  
    </Contenedor> 
  );
}

export default App;
