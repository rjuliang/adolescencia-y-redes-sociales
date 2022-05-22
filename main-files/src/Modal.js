import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose}>
          Cerrar
        </button>
        <br></br>
        <div className="videos-modal">
        {children} 
        </div>               
      </section>
    </div>
  );
};

export default Modal;