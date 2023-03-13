import React from 'react'
import {} from '../stylesheets/Resultado.css'

const DEFAULT_ESCUDO= 'https://www.ellitoral.com/images/2022/12/18/9wS7vb347_1300x655__1.jpg'
const POSIBLE_ESCUDO= {
    "Argentinos":"https://www.escudosfc.com.br/images/argentinos.png",
    "Arsenal":"https://www.escudosfc.com.br/images/arsenal_arg.png",
    "Belgrano":"https://www.escudosfc.com.br/images/belgrano.png",
    "Boca":"https://www.escudosfc.com.br/images/bocc.png",
    "Central Cordoba":"https://www.escudosfc.com.br/images/central_cord_santiago_arg.png",
    "Colon":"https://www.escudosfc.com.br/images/colon.png",
    "DefensayJusticia":"https://www.escudosfc.com.br/images/defensayjusticia.png",
    "Estudiantes":"https://www.escudosfc.com.br/images/estudic.png",
    "Gimnasia y Esgrima LP":"https://www.escudosfc.com.br/images/glaplatc.png",
    "Godoy Cruz MDZ":"https://www.escudosfc.com.br/images/godoycruz.png",
    "Huracan":"https://www.escudosfc.com.br/images/huracanc.png",
    "Independiente":"https://www.escudosfc.com.br/images/indepc.png",
    "Instituto":"https://www.escudosfc.com.br/images/instituto.png",
    "Lanus":"https://www.escudosfc.com.br/images/lanusc.png",
    "Newells":"https://www.escudosfc.com.br/images/newelsc.png",
    "Platense":"https://www.escudosfc.com.br/images/platensc.png",
    "Racing":"https://www.escudosfc.com.br/images/racingc.png",
    "River":"https://www.escudosfc.com.br/images/riverc.png",
    "Rosario Central":"https://www.escudosfc.com.br/images/rosarioc.png",
    "San Lorenzo":"https://www.escudosfc.com.br/images/san_loc.png",
    "Sarmiento":"https://www.escudosfc.com.br/images/sarmiento_arg.png",
    "Talleres":"https://www.escudosfc.com.br/images/talleres.png",
    "Tigre":"https://www.escudosfc.com.br/images/tigre_arg.png",
    "Union":"https://www.escudosfc.com.br/images/union_santa_fe.png",
    "Velez":"https://www.escudosfc.com.br/images/velez.png",
    "Atletico Tucuman":"https://www.escudosfc.com.br/images/attucuman.png",
    "Banfield":"https://www.escudosfc.com.br/images/banfield.png"
    
}

const Resultado = ({favorito}) => {
    const escudo= POSIBLE_ESCUDO[favorito.club] || DEFAULT_ESCUDO
    return (

    <div className='resultado'>
        <p><h2>Hola {favorito.nombre}</h2></p>
        <p>Sabemos que sos hincha de: <strong> {favorito.club}</strong></p>
        
        <p>Aca esta el escudo de #TUCLUB</p>
        <img src={escudo} alt='boca'></img>
    </div>  
    )
}

export default Resultado