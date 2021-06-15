import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalActions";

const Modal = (props) => {
  const { children } = props;

  //Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  //UseSelector para acceder a un valor en el store
  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
};

export default Modal;
