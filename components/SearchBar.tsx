"use client";

import React, { useState } from "react";
import { SearchManuFacturer } from ".";

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState<string>("");
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="search__item">
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
