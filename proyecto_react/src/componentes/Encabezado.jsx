import React, {useState} from "react";

function Encabezado(){
  
    return(
        <div>
            <h2>Mi aplicacion</h2>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/contacto">contacto</a></li>
                </ul>

            </nav>
        </div>
    );
}
export default Encabezado;