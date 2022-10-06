import React from 'react'
//import { TiposBasicos } from './typescript/TiposBasicos';
//import {ObjetosLiterales} from './typescript/ObjetosLiterales';
//import {Contador} from './components/Contador';
//import {ContadorHook} from './components/ContadorHook';
import { Login } from "./components/Login";

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
      {/*<Contador/>*/}
      {/*<ContadorHook/>*/}
      {<Login/>}
    </div>
  )
}
export default App;