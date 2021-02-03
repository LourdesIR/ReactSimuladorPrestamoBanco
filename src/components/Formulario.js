import React, {useState} from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
display:flex;
margin-bottom:1rem;
align-items:center;
`;

const Label = styled.label`
flex: 0 0 100px;
`;

const Select = styled.select`
display:block;
width:100%;
padding:1rem;
border: 1px solid #e1e1e1;
-webkit-appearance:none;
border-radius:5px;
`;

const InputRadio = styled.input`
margin: 0 1rem;

`;

const Boton = styled.button`
background-color:#00838f;
font-size:16px;
width:100%;
padding:1rem;
color:#fff;
text-transform:uppercase;
font-weight:bold;
border:none;
transition:background-color 3s ease;
margin-top:2rem;
border-radius:5px;

&:hover{
cursor:pointer;
background-color:#26C6DA;
}

`;

const Error = styled.div`
background-color:orange;
color:#fff;
width:100%;
padding:1rem;
margin-bottom:2rem;
text-align:center;
`;

const Formulario = () => {

    const [datos, guardarDatos] = useState({
        banco:'',
        prestamo:'',
        tipo:'',
        metodo:'',
        cuota:''
    })

    //manejo de errores

    const [error, guardarError] = useState(false);

    const {banco, prestamo, tipo, metodo, cuota} = datos;

    //Leer datos del form

    const informacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    //Al apretar enviar

     const enviarDatos = e =>{
       e.preventDefault();
       if(banco.trim()==='' || prestamo.trim()==='' || tipo.trim()==='' || metodo.trim()==='' || cuota.trim()===''){
           guardarError(true);
           return;
       }

       guardarError(false);
    }

    return (  
        <form 
        onSubmit={enviarDatos}
        >
            {error?<Error>Todos los campos son obligatorios</Error>:null}
            <Campo>
            <Label>Banco</Label>
            <Select
            name='banco'
            value={banco}
            onChange={informacion}
            >
            <option value="">-- Seleccione --</option>
            <option value="nacion">Nacion</option>
            <option value="provincia">Provincia de BsAs</option>
            <option value="galicia">Galicia</option>
            <option value="hsbc">HSBC</option>
            <option value="credicoop">Credicoop</option>
            <option value="patagonia">Patagonia</option>
            <option value="frances">Frances</option>
            </Select>
            </Campo>
            <Campo>
            <Label>Prestamo</Label>
            <Select
            name='prestamo'
            value={prestamo}
            onChange={informacion}
            >
            <option value="">-- Seleccione --</option>
            <option value="millon">1.000.000 Pesos</option>
            <option value="mediomillon">500.000 Pesos</option>
            <option value="cienmil">100.000 Pesos</option>
            </Select>
            </Campo>
            <Campo>
            <Label>Tipo de Credito</Label>
            <Select
            name='tipo'
            value={tipo}
            onChange={informacion}
            >
            <option value="">-- Seleccione --</option>
            <option value="personal">Personal</option>
            <option value="hipotecario">hipotecario</option>
            <option value="uva">UVA</option>
            </Select>
            </Campo>
            <Campo>
            <Label>Metodo de pago</Label>
            <InputRadio type="radio" name="metodo"  value="frances" checked={metodo === "frances"} onChange={informacion}/>Frances
            <InputRadio type="radio" name="metodo"  value="aleman" checked={metodo === "aleman"} onChange={informacion}/>Aleman
            <InputRadio type="radio" name="metodo"  value="americano" checked={metodo === "americano"} onChange={informacion}/>Americano
            </Campo>
            <Campo>
            <Label>Cantidad de cuotas</Label>
            <Select
            name='cuota'
            value={cuota}
            onChange={informacion}
            >
            <option value="">-- Seleccione --</option>
            <option value="venticuatro">24 meses</option>
            <option value="treintayseis">36 meses</option>
            <option value="cuarentayocho">48 meses</option>
            <option value="setentaydos">72 meses</option>
            </Select>
            </Campo>
            <Boton type='submit'> Calcular </Boton>
        </form>
    );
}
 
export default Formulario;