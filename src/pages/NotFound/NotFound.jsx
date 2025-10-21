import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.code}>404</h1>
        <p className={css.message}>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className={css.subtext}>
          It might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Link to="/" className={css.homeBtn}>
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
