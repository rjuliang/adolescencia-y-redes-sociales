import React, { Component } from "react";
import more_info from './files/info_blog_covid.pdf'

class MoreInfo extends Component {
    render(){
        return (
            <div>
                <p>Existen diferentes estrategias que nos pueden ayudar a sentirnos bien en momentos difíciles o en situaciones de crisis. El uso frecuente de las redes sociales y el distanciamiento que ha generado la pandemia por COVID-19, puede llevarnos a tener cambios en nuestras emociones que es importante aprender a manejar. </p>
                <p>A continuación, te invitamos a hacer una práctica en respiración diafragmática y en mindfulness, técnicas que contribuirán a tu bienestar físico y mental. </p>
                <p><b>Reto #2:</b></p>
                <p>Te invitamos a practicar estos dos ejercicios que te ayudaran a estar mejor.</p>
                <p><b>Entrenamiento en Mindfulness</b></p>
                <p><a href="https://www.youtube.com/watch?v=T3ysepzDn2A">https://www.youtube.com/watch?v=T3ysepzDn2A</a> - video practica mindfulness </p>
                <p><b>Entrenamiento en Respiración Diafragmática </b></p>
                <p><a href="https://www.youtube.com/watch?v=T9wpPmCoyAc">https://www.youtube.com/watch?v=T9wpPmCoyAc</a> - video respiración diafragmática</p>
                <hr></hr>
                <p>En caso de que necesites ayuda y orientación puedes comunicarte a: </p>
                <div className="linea-emergencia">
                    <p>Líneas de atención en salud mental - BOGOTA</p>
                    <p>Línea 106</p>
                    <p>Whatsapp 300 754 9833 24 horas del día</p>
                </div>
                <hr></hr>
                <iframe src={more_info} title="Mas Informacion acerca del covid y las redes sociales" width="100%" height="500px">
                </iframe>
            </div>
        )
    }
}

export default MoreInfo;