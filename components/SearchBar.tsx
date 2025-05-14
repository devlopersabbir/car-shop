"use client";

import React, { FormEvent, useState } from "react";
import { SearchManuFacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState<string>("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manuFacturer === "" && model === "") return;

    updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manuFacturer) {
      searchParams.set("manuFacturer", manuFacturer);
    } else {
      searchParams.delete("manuFacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="search__item">
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* <SearchButton classes="" /> */}
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="modal icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="moda"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        {/* <SearchButton classes="sm:hidden" /> */}
        <SearchButton classes="" />
      </div>
    </form>
  );
};

export default SearchBar;
const SearchButton = ({ classes }: { classes: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${classes}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="search icon"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
