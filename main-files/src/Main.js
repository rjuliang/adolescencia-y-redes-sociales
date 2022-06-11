import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Acerca from "./Acerca";
import Actividades from "./Actividades";
import Home from './Home';
import MoreInfo from "./more-info";
import iconos from './images/main_icon.png';
class Main extends Component {
    render(){
        return (
            <div>
                <HashRouter>
                <figure>
                    <img src={iconos} alt="iconos de redes sociales" width="300"/>
                </figure>
                <h1>Viaja por las Redes de Manera Saludable</h1>                 
                <ul className="header">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/redes">Acerca de las Redes</NavLink></li>
                    <li><NavLink to="/actividades">Actividades</NavLink></li>
                    <li><NavLink to="/mas_info">Más información</NavLink></li>
                </ul>
                <div className="content"> 
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/redes" element={<Acerca/>}></Route>
                        <Route path="/actividades" element={<Actividades/>}></Route>
                        <Route path="/mas_info" element={<MoreInfo/>}></Route>
                    </Routes>                          
                </div>
                </HashRouter>
            </div>
        )
    }   
}
export default Main;