import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/">
      {/* <div className={css.logo}> */}
      <span className={css.logoText}>Nanny.Services</span>
      {/* </div> */}
    </NavLink>
  );
}
