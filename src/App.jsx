import React, {useState} from 'react'
import Formulario from './Components/Formulario'
//import Escudos from './assets/escudos.json'
import './App.css'
import { GiSoccerKick } from "react-icons/gi";

const App = () =>  {
  return (
    <div className='App'>
    <div className='contenedor-ppal'>
    <span>
    <h1>PARTICIPA DE ESTA ENCUESTA <GiSoccerKick/></h1>
    </span>
      <Formulario/>
    </div>
    </div>
  )
}

export default App
