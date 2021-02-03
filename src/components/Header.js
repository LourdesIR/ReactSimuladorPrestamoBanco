import React from 'react';
import styled from '@emotion/styled';

//con la libreria emotion.sh se llama al elemento que se le quiere dar estilo (en este caso header) y se escribe el css como string
const ContenedorHeader = styled.header`
background-color: #073446;
padding:10px;
font-weight:bold;
color:#fff; 
`;

const TextoHeader = styled.h1`
font-size:2rem;
margin:0;
font-family: 'Slabo 27px',serif;
text-align:center;
`;

const Header = () => {
    return ( 
        <ContenedorHeader >
           <TextoHeader >Simulador de prestamos bancarios</TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;