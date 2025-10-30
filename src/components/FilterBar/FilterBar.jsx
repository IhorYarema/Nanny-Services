import { useState } from "react";
import Select from "react-select";
import css from "./FilterBar.module.css";
import "./FilterBar.css";

export default function FilterBar({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const options = [
    { value: "az", label: "A to Z" },
    { value: "za", label: "Z to A" },
    { value: "cheap", label: "Less than 10$" },
    { value: "expensive", label: "Greater than 10$" },
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Not popular" },
    { value: "all", label: "Show all" },
  ];

  const handleChange = (option) => {
    setSelectedFilter(option);
    onFilterChange(option.value);
  };

  return (
    <div className={css.filterBar}>
      <label className={css.label}>Filters</label>
      <div className={css.selectWrapper}>
        <Select
          value={selectedFilter}
          onChange={handleChange}
          options={options}
          default={options[7]}
          // styles={customStyles}
          // placeholder="Select filter..."
          className={css.reactSelectContainer}
          classNamePrefix="custom"
        />
      </div>
    </div>
  );
}
