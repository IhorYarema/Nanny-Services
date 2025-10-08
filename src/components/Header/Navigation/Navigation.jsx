import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation({
  isLoggedIn = false,
  closeMenu = () => {},
  onLogout = () => {},
  // isMobile = false,
}) {
  return (
    <nav className={css.navGroup}>
      <div className={css.navContainer}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ""}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/nannies"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ""}`
          }
          onClick={closeMenu}
        >
          Nannies
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ""}`
            }
            onClick={closeMenu}
          >
            Favorites
          </NavLink>
        )}{" "}
      </div>
      {!isLoggedIn ? (
        <div className={css.logContainer}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ""}`
            }
            onClick={closeMenu}
          >
            Log in
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${css.linkBtn} ${isActive ? css.active : ""}`
            }
            onClick={closeMenu}
          >
            Registration
          </NavLink>
        </div>
      ) : (
        <button className={css.linkBtn} onClick={onLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
