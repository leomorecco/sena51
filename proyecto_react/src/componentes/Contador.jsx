import React, {useState} from "react";
import Encabezado1 from'./Encabezado1';

function Contador(){

    const [count, setCount] = useState(0);

    const incremento = () => setCount(count + 1);

    const reset = () => setCount(0);
    
    
    return(
        
        <div>
            <Encabezado1 />
            <h2>Valor del contador: {count} </h2>
            <button onClick={incremento}>incrementar</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Contador;