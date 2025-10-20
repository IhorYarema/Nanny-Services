import css from "./NanniesList.module.css";
import NannyCard from "../NannyCard/NannyCard";
import { useEffect, useState } from "react";
import { getNannies } from "../../services/nannyService";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export default function NanniesList() {
  const [nannies, setNannies] = useState([]);
  const [visibleNannies, setVisibleNannies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const nanniesPerPage = 3;

  useEffect(() => {
    (async () => {
      try {
        const data = await getNannies();
        const arr = Object.entries(data).map(([id, nanny]) => ({
          id,
          ...nanny,
        }));
        setNannies(arr);
        setVisibleNannies(arr.slice(0, nanniesPerPage));
      } catch (err) {
        setError("Не вдалося завантажити нянь 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  const totalPages = Math.ceil(nannies.length / nanniesPerPage);

  const handleMore = () => {
    const nextPage = currentPage + 1;
    const newVisible = nannies.slice(0, nextPage * nanniesPerPage);
    setVisibleNannies(newVisible);
    setCurrentPage(nextPage);
  };

  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        {Array.isArray(visibleNannies) &&
          visibleNannies.map((nanny) => (
            <li key={nanny._id}>
              <NannyCard nanny={nanny} />
            </li>
          ))}
      </ul>
      {currentPage < totalPages && (
        <LoadMoreButton onClick={handleMore} className={css.loadMoreBtn} />
      )}
    </div>
  );
}
