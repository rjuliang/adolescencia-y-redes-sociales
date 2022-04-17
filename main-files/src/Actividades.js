import React, { Component } from "react";
import HandleModal from "./HandleModal.js";
import main_content from './ActivitiesContent';


class Actividades extends Component {
    render(){
        return (
            <div>
                <h3>Que Hacer?</h3>
                <div>
                    <div>
                        {main_content.map(item => (
                            <div>
                                <HandleModal videos={item.videos} phrase={item.phrase}></HandleModal>
                            </div>
                            
                        ))}
                        <p></p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Actividades;