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
        <Navigation />
      </div>
    </header>
  );
}
