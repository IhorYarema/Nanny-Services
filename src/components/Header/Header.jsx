import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import Navigation from "./Navigation/Navigation";
import css from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔐 Відстежуємо авторизацію користувача
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Ви успішно вийшли!");
      navigate("/");
    } catch (error) {
      toast.error("Помилка при виході: " + error.message);
    } finally {
      setMenuOpen(false);
    }
  };

  return (
    <header className={css.header}>
      {" "}
      <div className={css.container}>
        <h1 className={css.logo} onClick={() => navigate("/")}>
          NannyCare{" "}
        </h1>
        ```
        {/* Десктопна навігація */}
        <nav className={css.desktopNav}>
          <Navigation
            isLoggedIn={!!user}
            onLogout={handleLogout}
            closeMenu={() => {}}
          />
        </nav>
        {/* Кнопка бургер для мобільного меню */}
        <button
          className={css.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
      {/* Мобільне меню */}
      {menuOpen && (
        <div className={`${css.mobileMenu} ${css.open}`}>
          <Navigation
            isLoggedIn={!!user}
            onLogout={handleLogout}
            closeMenu={() => setMenuOpen(false)}
            isMobile={true}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
