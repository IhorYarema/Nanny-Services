import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import AuthModal from "../../AuthModal/AuthModal";
import LoginForm from "../../AuthModal/Auth/LoginForm";
import RegisterForm from "../../AuthModal/Auth/RegisterForm";
import { useState } from "react";

export default function Navigation({
  isLoggedIn = false,
  onLogout = () => {},
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "login" | "register"

  const openLogin = () => {
    setModalType("login");
    setShowModal(true);
  };

  const openRegister = () => {
    setModalType("register");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  return (
    <>
      <nav className={css.navGroup}>
        <div className={css.navContainer}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/nannies"
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ""}`
            }
          >
            Nannies
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.active : ""}`
              }
            >
              Favorites
            </NavLink>
          )}{" "}
        </div>
        {!isLoggedIn ? (
          <div className={css.logContainer}>
            <NavLink
              className={({ isActive }) =>
                `${css.logBtn} ${isActive ? css.active : ""}`
              }
              onClick={openLogin}
            >
              Log in
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${css.registerBtn} ${isActive ? css.active : ""}`
              }
              onClick={openRegister}
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

      {showModal && (
        <AuthModal onClose={closeModal}>
          {modalType === "login" ? (
            <LoginForm onSubmit={() => {}} />
          ) : (
            <RegisterForm onSubmit={() => {}} />
          )}
        </AuthModal>
      )}
    </>
  );
}
