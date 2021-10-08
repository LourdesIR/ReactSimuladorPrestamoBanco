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
width:93%;
padding:1rem;
margin-bottom:2rem;
text-align:center;
`;

const Mensaje = styled.div`
background-color:Green;
color:#fff;
width:93%;
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

    const [error, setError] = useState(false);

    const {banco, prestamo, tipo, metodo, cuota} = datos;

    //Leer datos del form
    const informacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const [mensaje,setMensaje]=useState("");
    let valorTotal= 0;
    let valorCuota=0;
    //Al apretar enviar
     const enviarDatos = e =>{
       e.preventDefault();
       if(banco.trim()==='' || prestamo.trim()==='' || tipo.trim()==='' || metodo.trim()==='' || cuota.trim()===''){
           setError(true);
           return;
       }
    
        try{
    // Eleccion del banco
    if(banco==="nacion"||banco==="provincia"){
        //bancos estatales
        if(parseInt(prestamo) <= 500000){
            switch (tipo){
                case "personal":
                    valorTotal = parseInt(prestamo)*2.8;
                break
                case "hipotecario":
                    valorTotal = parseInt(prestamo)*2.3;
                break
                case "uva":
                    valorTotal = parseInt(prestamo)*2.5;
                break
                default:
                    console.log("no se ha encontrado el valor")
            }
            }else {
            switch (tipo){
                case "personal":
                    valorTotal = parseInt(prestamo)*2.6;
                break
                case "hipotecario":
                    valorTotal = parseInt(prestamo)*2.1;
                break
                case "uva":
                    valorTotal = parseInt(prestamo)*2.3;
                break
                default:
                    console.log("no se ha encontrado el valor")
            }
        }
            valorCuota= valorTotal/parseInt(cuota);
        }else{
        //bancos privados
        if(prestamo==="100000"||prestamo==="500000"){
            switch (tipo){
                case "personal":
                    valorTotal = parseInt(prestamo)*3.2;
                break
                case "hipotecario":
                    valorTotal = parseInt(prestamo)*2.6;
                break
                case "uva":
                    valorTotal = parseInt(prestamo)*2.8;
                break
                default:
                    console.log("no se ha encontrado el valor")
            }
        }else {
            switch (tipo){
                case "personal":
                    valorTotal = parseInt(prestamo)*3.0;
                break
                case "hipotecario":
                    valorTotal = parseInt(prestamo)*2.4;
                break
                case "uva":
                    valorTotal = parseInt(prestamo)*2.6;
                break
                default:
                    console.log("no se ha encontrado el valor")
            }
            }
            valorCuota = valorTotal/parseInt(cuota);
        }
        }catch (e){
            console.log("Huvo un error en Calculo", e)
        }
        if(valorTotal!==0 && valorCuota!==0) {
            setMensaje(`El Total a pagar: ${Math.floor(valorTotal,-2)} pesos y el Valor de las cuotas: ${Math.round(valorCuota)} pesos por mes`)
        }
       setError(false);
    }
    
    return (  
        <form 
        onSubmit={enviarDatos}
        > 
            {mensaje?<Mensaje>{mensaje}</Mensaje>:null} 
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
            <option value="1000000">1.000.000 Pesos</option>
            <option value="500000">500.000 Pesos</option>
            <option value="100000">100.000 Pesos</option>
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
            <option value="24">24 meses</option>
            <option value="36">36 meses</option>
            <option value="48">48 meses</option>
            <option value="72">72 meses</option>
            </Select>
            </Campo>
            <Boton type='submit'> Calcular </Boton>
           
        </form>
    );
}
 
export default Formulario;