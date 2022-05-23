import React, { Component } from "react";
import HandleModal from "./HandleModal.js";
import main_content from './ActivitiesContent';


class Actividades extends Component {
    render(){
        return (
            <div>
                <h2>¿Que Hacer?</h2>
                <br></br>
                <div>
                    <div className="video-buttons">
                        {main_content.map(item => (
                            <div className="videos-pre-button">
                                <HandleModal videos={item.videos} phrase={item.phrase}></HandleModal>
                            </div>
                            
                        ))}
                        
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <h2>Encuesta</h2>
                <p>Llena la encuesta acerca redes sociales <a href="https://forms.gle/pUdphVN6wPtfp5JU9" target="_blank">aquí</a></p>
            </div>
        )
    }
}

export default Actividades;