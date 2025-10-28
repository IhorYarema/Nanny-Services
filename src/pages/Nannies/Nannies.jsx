import NanniesList from "../../components/NanniesList/NanniesList";
import css from "./Nannies.module.css";
import { useState, useMemo, useEffect } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import { getNannies } from "../../services/nannyService";
import Loader from "../../components/Loader/Loader";

export default function Nannies() {
  const [nannies, setNannies] = useState([]);
  const [filter, setFilter] = useState("all");
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
        setError("Failed to load nannies 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredNannies = useMemo(() => {
    let result = [...nannies];

    switch (filter) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "cheap":
        result = result.filter((n) => n.price < 10);
        break;
      case "expensive":
        result = result.filter((n) => n.price >= 10);
        break;
      case "popular":
        result = result.filter((n) => n.popular);
        break;
      case "unpopular":
        result = result.filter((n) => !n.popular);
        break;
      default:
        break;
    }

    return result;
  }, [filter, nannies]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <section className={css.section_nannies}>
      <FilterBar onFilterChange={setFilter} />
      <NanniesList nannies={filteredNannies} />
    </section>
  );
}
