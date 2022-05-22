import React,{ Component } from "react";
import ipad_seat from "./images/ipad-seat.PNG";
import one_phone from "./images/2-one-phone.PNG";
import reading from "./images/3-reading.PNG";


class Socializacion extends Component {
    render(){
        return (
            <div>
                <h2>La Socializacion Elemento Clave En Adolescentes</h2>
                <br></br>
                <div className="elementos">
                    <div>                                              
                        <p>Las relaciones sociales se vieron afectadas de manera importante a raíz del COVID-19.</p>
                        <figure>
                            <img src= {ipad_seat} alt="Dos niños leyendo sentados en tablet" />
                        </figure>  
                    </div>
                    <div>                        
                        <p>Los grupos de compañeros y amigos son fundamentales para explorar y formar identidades, especialmente para los adolescentes.</p>
                        <figure>
                            <img src= {reading} alt="3 amigos leyendo libros" />
                        </figure>
                    </div>
                    <div>                        
                        <p>Aunque puede ser una herramienta útil para reducir el aislamiento, el uso de las redes sociales por la población joven debe manejarse con cuidado para evitar efectos negativos en su salud y su bienestar.</p>
                        <figure>
                            <img src= {one_phone} alt="Dos adolescentes leyendo en un celular" />
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}

export default Socializacion;