import React, { Component } from "react";
import more_info from './files/info_blog_covid.pdf'

class MoreInfo extends Component {
    render(){
        return (
            <div>
                <iframe src={more_info} title="Mas Informacion acerca del covid y las redes sociales" width="100%" height="500px">
                </iframe>
            </div>
        )
    }
}

export default MoreInfo;