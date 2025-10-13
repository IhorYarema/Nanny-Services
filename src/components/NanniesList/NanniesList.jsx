import css from "./NanniesList.module.css";
import NannyCard from "../NannyCard/NannyCard";
import { useEffect, useState } from "react";
import { getNannies } from "../../services/nannyService";

export default function NanniesList() {
  const [nannies, setNannies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getNannies();
        const arr = Object.entries(data).map(([id, nanny]) => ({
          id,
          ...nanny,
        }));
        setNannies(arr);
      } catch (err) {
        setError("Не вдалося завантажити нянь 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul className={css.list}>
        {Array.isArray(nannies) &&
          nannies.map((nanny) => (
            <li key={nanny._id}>
              <NannyCard nanny={nanny} />
            </li>
          ))}
      </ul>
      {/* {isLoadingFavoriteRecipes && <Loader />}
      {totalPages > 0 &&
        currentPage < totalPages &&
        !isLoadingFavoriteRecipes && (
          <LoadMoreBtn nextPage={nextPage} fetchAction={fetchRecipes} />
        )} */}
    </>
  );
}
