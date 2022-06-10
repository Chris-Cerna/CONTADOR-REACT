import './App.css';
import Boton from './componentes/boton';
import milogoprogra from "./imagenes/logolevelup.png";
import Contador from './componentes/contador';
import{useState} from 'react';

function App() {

  

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    
    setNumClicks(numClicks + 1);
  }


  const reiniciarContador = () => {
    setNumClicks(0);
  }



  const restarContador = () => {
    setNumClicks(numClicks - 1);
  }

  
  
  return (
    <div className="App">

      <h1>CONTADOR</h1>
      <div className="milogo-contenedor">
        <img 
        className="milogo-logo"
        src={milogoprogra}
        alt="milogo"/>

      </div>
   

      
      <div className= "contenedor-contador">
        <Contador numClicks= {numClicks} />
        
        <Boton
        texto="Clic"
        esBotonDeClick={true}
        manejarClick={manejarClick}/>

        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>

        <Boton
        texto="Resta"
        esBotonDeResta={undefined}
        manejarClick={restarContador }/>
        

      </div>
    </div>
  );
}

export default App;
