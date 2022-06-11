import React, { Component } from "react";
import graph_1 from './images/graph-1.PNG';
import ansiedad_depresion_img from "./images/ansiedad-depresion.PNG";

class Home extends Component {
    render(){
        return (
            <div>
                <h1>¿Te Gustan las Redes Sociales?</h1>
                <p>La adolescencia es una etapa de la vida donde se presenta un importante desarrollo biológico, cognitivo, emocional y social. Los adolescentes y jóvenes juegan un papel importante en la sociedad, y forman el 30% de la población de Latinoamérica y el Caribe.</p>
                <br></br>
                <figure>
                    <img src={graph_1} alt="En Colombia hay 8.5 millones de personas entre los 10 y los 19 años de edad: 49% mujeres y 51% hombres" width="600px"/>
                </figure>
                <br></br>
                <p>En el desarrollo de la pandemia causada por COVID-19 las relaciones sociales se vieron afectadas de manera importante, especialmente en los adolescentes quienes aumentaron en un 76% el uso de redes sociales como alternativa de socialización, enfrentándose además a diferentes riesgos y experiencias desconocidas. </p>
                <br></br>
                <p>Durante el tiempo transcurrido de la pandemia en Latinoamérica y el Caribe, los adolescentes encuestados por U-Report manifestaron sentir:</p>
                <figure>
                    <img src={ansiedad_depresion_img} alt="27% Ansiedad y 15% depresion (graficas de porcentages)" width="600px"/>
                </figure> 
                <br></br>
                <p>Por esta razón hemos diseñado este espacio, donde podrás encontrar información que te orientará para el empleo adecuado de las redes sociales y te ayudará a visualizar otras actividades que pueden contribuir en tu bienestar.</p>              
            </div>
        )
    }
}

export default Home;