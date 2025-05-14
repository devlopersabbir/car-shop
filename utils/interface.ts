import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyle?: string;
  isDisabled?: boolean;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  textStyles?: string;
}

export type OptionProps = {
  title: string;
  value: string;
};
export interface ICustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ISearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICar;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
