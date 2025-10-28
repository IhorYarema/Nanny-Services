import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

function App() {
  const [user, setUser] = useState(null);

  // 🔥 Слухаємо зміни авторизації Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("🚪 Logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className={css.appWrapper}>
      <Header user={user} onLogout={handleLogout} setUser={setUser} />
      <div className={css.pageContent}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nannies" element={<Nannies />} />
            <Route path="/favorites" element={<FavoritesPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
