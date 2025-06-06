"use client";

import { updateSearchParams } from "@/utils/api";
import { ICustomFilterProps, OptionProps } from "@/utils/interface";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const CustomFilter: React.FC<ICustomFilterProps> = ({ title, options }) => {
  const [selected, setSelected] = useState<OptionProps>(options[0]);
  const router = useRouter();

  const handleUpdatePrams = (e: { value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdatePrams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span>{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="up donw"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options &&
                options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
