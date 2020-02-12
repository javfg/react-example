import React from 'react';  // eslint-disable-line no-unused-vars
import Modal from 'react-modal';


Modal.setAppElement('#app');

const PlaceModal = (props) => (

    <Modal
        isOpen={!!props.selectedPlace}
        onRequestClose={props.handleUnpick}
        contentLabel="Plato seleccionado"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">You are going to:</h3>
        {props.selectedPlace && <p className="modal__body">{props.selectedPlace}</p>}
        <button
            className="button modal__button"
            autoFocus
            onClick={() => props.handleUnpick()}
        >
            Ok
        </button>
    </Modal>
);


export default PlaceModal;