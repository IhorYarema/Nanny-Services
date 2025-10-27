import css from "./AuthModal.module.css";

export default function AuthModal({ onClose, children }) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()} // щоб не закривалось при кліку всередині
      >
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
