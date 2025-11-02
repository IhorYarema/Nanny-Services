import React from "react";
import ReactDOM from "react-dom";
import css from "./Backdrop.module.css";

export default function Backdrop({ onClose, children }) {
  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={onClose}>
      {children}
    </div>,
    document.body
  );
}
