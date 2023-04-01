import React from "react";
import PhotoAdri from './styles/images/adri.png';

const About = () => {
    return <div className='container'>
        <div className="container-photo-adri">
            <img src={PhotoAdri} alt="Adri's photo" width='250' />
        </div>
        <div className="container-info">
        <h1>Hola Soy Adriana</h1>
        <h2>Full Stack Developer</h2>
        <p className="container_p1">Me encanta Programar, tanto como el Crossfit
            entre a Henry por la oportunidad que vi, de un 
            brillante futuro en Programación.
            Soy profesional en el area de Recursos Humanos,
            y es por esto que me encanta trabajar en equipo,
            y juntos alcanzar las metas propuestas.
        </p>
        <p className="container_p2">
            Aprender y enseñar con código se ha convertido 
            en mi pasión.
        </p>
        </div>
    </div>
}

export default About;