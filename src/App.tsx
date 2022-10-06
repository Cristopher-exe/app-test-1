import React from 'react'
//import { TiposBasicos } from './typescript/TiposBasicos';
//import {ObjetosLiterales} from './typescript/ObjetosLiterales';
import {Contador} from './components/Contador';
const persona = {
  nombre: 'Martha',
  edad: 30,
  direccion: {
      pais: 'Mexico',
      estado: 'Nayarit',
      ciudad: 'Tepic',
      direccion: 'Conocido No. 533'
  }
}
const App = () => {
  return (
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr/>
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {<Contador/>}
      <code>
                <pre>
                    {/*JSON.stringify(persona)*/}
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
    </div>
  )
}
export default App;