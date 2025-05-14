"use client";
import { ISearchManuFacturerProps } from "@/utils";
import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constant";

type Props = {
  manuFacturer: string;
  setManuFacturer: Dispatch<SetStateAction<string>>;
};
const SearchManuFacturer = ({ manuFacturer, setManuFacturer }: Props) => {
  const [query, setQuery] = useState<string>("");

  const filltered =
    query === ""
      ? manufacturers
      : manufacturers.filter((item: string, index) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manuFacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            displayValue={(manufacturer: string) => manufacturer}
            placeholder="Volkswagen"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(event.target.value)
            }
            className="search-manufacturer__input"
          />
          <Transition
            as={Fragment}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
            leave="transition ease-in duration-100"
          >
            <Combobox.Options>
              {filltered &&
                filltered.map((item: string, index: number) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white " : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            {" "}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManuFacturer;
