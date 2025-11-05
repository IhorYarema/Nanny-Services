import ReactDOM from "react-dom";
import css from "./Backdrop.module.css";

export default function Backdrop({ onClick, children }) {
  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={onClick}>
      {children}
    </div>,
    document.body
  );
}
