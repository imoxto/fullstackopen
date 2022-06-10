import React from "react";

const Filter = ({ text, handleFilterChange }) => {
  return (
    <div>
      Filter shown with <input type={"text"} value={text} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
