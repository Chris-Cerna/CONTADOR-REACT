import React from "react";
import '../componentes/hojas-de-estilo/boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }){
    return (
        <button className={esBotonDeClick ? "boton-clic": "boton-reiniciar"}
            onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;
