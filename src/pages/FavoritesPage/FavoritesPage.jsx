import { useState, useEffect, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, get } from "firebase/database";
import { dbFirestore, db, auth } from "../../firebase";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterBar from "../../components/FilterBar/FilterBar";
import Loader from "../../components/Loader/Loader";
import { onAuthStateChanged } from "firebase/auth";
import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // Слушаем авторизацию
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Загружаем избранных нянь
  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        setLoading(true);

        // 1️⃣ Получаем массив избранных из Firestore
        const favDoc = await getDoc(doc(dbFirestore, "users", user.uid));
        if (!favDoc.exists()) {
          setFavorites([]);
          return;
        }

        const favData = favDoc.data();

        // Преобразуем в массив, если нужно
        const favIds = Array.isArray(favData.favorites)
          ? favData.favorites
          : Object.values(favData.favorites || []);
        if (favIds.length === 0) {
          setFavorites([]);
          return;
        }

        // 2️⃣ Подгружаем данные нянь из Realtime Database
        const nannyPromises = favIds.map(async (id) => {
          const nannySnap = await get(ref(db, id)); // путь в корень Realtime
          return nannySnap.exists() ? { id, ...nannySnap.val() } : null;
        });

        const nannyList = (await Promise.all(nannyPromises)).filter(Boolean);
        setFavorites(nannyList);
      } catch (err) {
        setError("Ошибка при загрузке избранных 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, [user]);

  // Фильтрация и сортировка
  const filteredFavorites = useMemo(() => {
    let result = [...favorites];

    switch (filter) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "cheap":
        result = result.filter((n) => n.price_per_hour < 10);
        break;
      case "expensive":
        result = result.filter((n) => n.price_per_hour >= 10);
        break;
      case "popular":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case "unpopular":
        result = result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filter, favorites]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Вы не авторизованы</p>;
  if (favorites.length === 0) return <p>Нет избранных нянь</p>;

  return (
    <section className={css.section_nannies}>
      <FilterBar onFilterChange={setFilter} />
      <NanniesList nannies={filteredFavorites} />
    </section>
  );
}
