import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/Contador'
import Encabezado from './componentes/Encabezado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{textAlign: 'center'}}></div>
      <h1>Contador React</h1>
      
      <Contador />
      <br></br>
      <Encabezado />
      
      
    </>
  );
}

export default App
