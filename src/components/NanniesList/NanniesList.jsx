import css from "./NanniesList.module.css";
import NannyCard from "../NannyCard/NannyCard";
import { useEffect, useState } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";

export default function NanniesList({ nannies }) {
  // const [nannies, setNannies] = useState([]);
  const [visibleNannies, setVisibleNannies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const nanniesPerPage = 3;

  useEffect(() => {
    (async () => {
      try {
        setVisibleNannies(nannies.slice(0, nanniesPerPage));
        setCurrentPage(1);
      } catch (err) {
        setError("Не вдалося завантажити нянь 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, [nannies]);

  if (loading) return <Loader />;
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
            <li key={nanny.id}>
              <NannyCard
                nanny={nanny}
                onRequireAuth={() =>
                  toast.error("Please log in to add to favorites!")
                }
              />
            </li>
          ))}
      </ul>
      {currentPage < totalPages && (
        <LoadMoreButton onClick={handleMore} className={css.loadMoreBtn} />
      )}
    </div>
  );
}
