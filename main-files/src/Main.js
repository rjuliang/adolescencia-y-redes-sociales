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

class Main extends Component {
    render(){
        return (
            <div>
                <HashRouter>
                <h1>Te gustan las redes sociales?</h1>
                <ul className="header">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/redes">Acerca de las Redes</NavLink></li>
                    <li><NavLink to="/actividades">Actividades</NavLink></li>
                    <li><NavLink to="/mas_info">Mas Informacion</NavLink></li>
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