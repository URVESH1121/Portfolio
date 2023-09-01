import React from "react";
import  { createPortal } from "react-dom";
import Card from "./Card";
import "./modal.css";
import { useModalContext } from "../context/modal-context";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
 
  return (
    <>
      {showModal &&
        createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}>
            </section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </>
  );
};

export default Modal;
