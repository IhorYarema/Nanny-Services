import { useLocation } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`${css.header} ${isHome ? css.headerHome : ""}`}>
      <div className={css.container}>
        <Logo />
        {/* <nav className={css.nav}>
          <a href="/">Home</a>
          <a href="/nannies">Nannies</a>
          <a href="/favorites">Favorites</a>
        </nav>
        <div className={css.buttons}>
          <button className={css.login}>Log in</button>
          <button className={css.register}>Registration</button>
        </div> */}
        <Navigation />
      </div>
    </header>
  );
}
