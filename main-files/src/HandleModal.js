import React, { Component } from "react";
import Modal from './Modal.js';

class HandleModal extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return(
            <div>
                <div>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        {this.props.videos.map(video=> 
                            <div>
                                <Video url={video}></Video>
                                <br></br>
                            </div>
                        )}
                    </Modal>
                    <div className="pre-modal">
                        <p>{this.props.phrase}</p>
                        <button type="button" onClick={this.showModal}>
                            Ver mas
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

class Video extends Component {
    render(){
        return(
            <iframe  src={this.props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }
}

export default HandleModal;