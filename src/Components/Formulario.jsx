import React, { useState } from 'react'
import Resultado from './Resultado'
import { Button } from '../stylesheets/Styles'
import { } from '../stylesheets/Formulario.css'
//import Escudos from '../assets/escudos.json'
/*------------------------------------------------------------------------------------*/



const Formulario = () => {
    const [favorito,setFavorito] = useState({
        nombre:"",
        club:""
    })
    
        const [validar,setValidar]= useState(false)
    const [error,setError]= useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (favorito.nombre.length>=3 && favorito.club.length >=6){
            setValidar(true)
            setError(false)
        }else{
            setError(true)
        }
    }
    

/*---------------------------------------------------*/


return (
    <div className='caja-contenedora-form'>
        <form onSubmit={handleSubmit}>
            <h2>Hola!</h2>
            <h3>Completa el cuadro para continuar</h3>
            <label>Ingresa tu Nombre: </label>
            <input type="text" value = {favorito.nombre} onChange={(e) => setFavorito({...favorito, nombre: e.target.value.trim()})} />
            <label>Club preferido: </label>
            <input type="text" value = {favorito.club} onChange={(e) => setFavorito({...favorito, club: e.target.value})} />
            

            <Button> Enviar </Button>
            {error && "Revisa los datos"} 
        </form>
        
        {validar && <Resultado favorito = {favorito}/>}

        
        
    </div>
    )
}

export default Formulario