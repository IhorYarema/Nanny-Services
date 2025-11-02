import { useEffect } from "react";
import css from "./Modal.module.css";
import Icon from "../Icon/Icon";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal({ children, onClose }) {
  // Закриття по клавіші Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Закриття по кліку на бекдроп
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}>
          <Icon className={css.crossIcon} name="x" size={32} />
        </button>
        {children}
      </div>
    </Backdrop>
  );
}
