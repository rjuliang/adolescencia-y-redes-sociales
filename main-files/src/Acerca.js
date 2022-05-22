import React, { Component } from "react";
import Socializacion from './Socializacion';
import UsoRedes from './UsoRedes';
class Acerca extends Component {
    render(){
        return (
            <div>
                <Socializacion></Socializacion>
                <br></br>
                <br></br>
                <UsoRedes></UsoRedes>
                <br></br>
                <hr></hr>
                <h2>Consecuencias A Largo Plazo Para Los Adolescentes</h2>
                <ul>
                    <li>Cambios en el desarrollo estructural del cerebro</li>
                    <li>Cambios en la salud mental </li>
                    <li>Dificultades en la interacción y habilidades sociales</li>
                    <li>Bajo rendimiento académico</li>
                    <li>Cambios en conductas de autocuidado</li>
                </ul>
            </div>
        )
    }
}
export default Acerca;