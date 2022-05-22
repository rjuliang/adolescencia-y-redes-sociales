import React, { Component } from "react";
import uso_redes from "./images/uso-redes.PNG";
class UsoRedes extends Component {
    render(){
        return (
            <div>
                <h2>Uso De Redes Sociales En Adolescentes</h2>
                <figure>
                    <img src={uso_redes} alt="grafico con uso de redes" />
                </figure>
            </div>
        )
    }
}

export default UsoRedes;