import React from "react";
import '../componentes/hojas-de-estilo/Contador.css';

function Contador({numClicks}) {
    return (
        <div className="contador"  style= {numClicks < 0 ? {color: "red"} : numClicks > 0 ? {color:"green"} : {color:"black"}}>

            {numClicks}

            

        </div>
    )
}

export default Contador;