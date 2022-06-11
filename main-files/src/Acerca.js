import React, { Component } from "react";
import Socializacion from './Socializacion';
import UsoRedes from './UsoRedes';
import img1 from './images/Picture1.jpg';
import img2 from './images/Picture2.jpg';
import img3 from './images/Picture3.jpg';
import img4 from './images/Picture4.jpg';
import img5 from './images/Picture5.jpg';
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
                <h2>Consecuencias Que Te Puede Traer El Uso Excesivo De Redes Sociales </h2>
                <ul className="cambios-desarrollo">
                    <li>Cambios en el desarrollo estructural del cerebro</li>
                    <figure>
                        <img src={img1} alt="Cerebro con mujer en el frente"/>
                    </figure>
                    <li>Cambios en conductas de autocuidado (alimentarse bien, dormir bien, compartir en familia, hacer deporte).</li>
                    <figure>
                        <img src={img2} alt="Varios retratos de la misma persona con distintas reacciones"/>
                    </figure>
                    <li>Dificultades en la interacción y habilidades sociales</li>
                    <figure>
                        <img src={img3} alt="caricatura de 4 personas en sus computadores"/>
                    </figure>
                    <li>Bajo rendimiento académico</li>
                    <figure>
                        <img src={img4} alt="Niña triste"/>
                    </figure>
                    <figure>
                        <img src={img5} alt="Niños frustrado haciendo tarea"/>
                    </figure>
                </ul>
            </div>
        )
    }
}
export default Acerca;