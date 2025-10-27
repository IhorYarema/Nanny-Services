import { useLocation } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";

export default function Header({ user, onLogout }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLoggedIn = !!user;

  return (
    <header className={`${css.header} ${isHome ? css.headerHome : ""}`}>
      <div className={`${css.container} ${isHome ? css.containerHome : ""}`}>
        <Logo />
        <Navigation user={user} isLoggedIn={isLoggedIn} onLogout={onLogout} />
      </div>
    </header>
  );
}
