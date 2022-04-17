import React, { Component } from "react";
import graph_1 from './images/graph-1.PNG';
import ansiedad_depresion_img from "./images/ansiedad-depresion.PNG"
import Socializacion from './Socializacion';
import UsoRedes from './UsoRedes';
import Actividades from "./Actividades";

class Main extends Component {
    render(){
        return (
            <div>
                <h1>Adolescencia Y Redes Sociales en Tiempos de Pandemia</h1>
                <p>La adolescencia es una etapa de la vida donde se presenta un importante desarrollo biológico, cognitivo, emocional y social.</p>
                <br></br>
                <figure>
                    <img src={graph_1} alt="En Colombia hay 8.5 millones de personas entre los 10 y los 19 años de edad: 49% mujeres y 51% hombres" width="600px"/>
                </figure>
                <br></br>
                <p>Durante el tiempo transcurrido de la pandemia en Latinoamérica y el Caribe, los adolescentes encuestados por U-Report manifestaron sentir</p>
                <figure>
                    <img src={ansiedad_depresion_img} alt="27% Ansiedad y 15% depresion (graficas de porcentages)" width="600px"/>
                </figure>
                <br></br>
                <Socializacion></Socializacion>
                <br></br>
                <UsoRedes></UsoRedes>
                <br></br>
                <h2>Consecuencias A Largo Plazo Para Los Adolescentes</h2>
                <ul>
                    <li>Cambios en el desarrollo estructural del cerebro</li>
                    <li>Cambios en la salud mental </li>
                    <li>Dificultades en la interacción y habilidades sociales</li>
                    <li>Bajo rendimiento académico</li>
                    <li>Cambios en conductas de autocuidado</li>
                </ul>
                <br></br>
                <Actividades></Actividades>
            </div>
        )
    }   
}
export default Main;