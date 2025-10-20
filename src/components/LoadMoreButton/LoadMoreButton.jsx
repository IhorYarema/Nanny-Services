import css from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => (
  <button className={css.btn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreButton;
