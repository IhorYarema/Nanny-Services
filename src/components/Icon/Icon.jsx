import React from "react";
import "../../assets/icons.svg";

const Icon = ({ name, size = 24, className }) => (
  <svg width={size} height={size} className={className}>
    <use href={`/icons.svg#icon-${name}`} />
  </svg>
);

export default Icon;
