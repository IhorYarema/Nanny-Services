import { useState } from "react";
import css from "./FilterBar.module.css";

export default function FilterBar({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div className={css.filterBar}>
      <label className={css.label}>Sort by:</label>
      <select
        className={css.select}
        value={selectedFilter}
        onChange={handleChange}
      >
        <option value="all">Show all</option>
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
        <option value="cheap">Price &lt; $10</option>
        <option value="expensive">Price &gt; $10</option>
        <option value="popular">Popular</option>
        <option value="unpopular">Unpopular</option>
      </select>
    </div>
  );
}
