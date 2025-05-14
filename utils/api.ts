import axios from "axios";
import { ICar } from "./interface";
import { cars } from "@/constant/cars";

export type Filters = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};
const fetchCars = async () => {
  return cars;
};

export default fetchCars;

export const updateSearchParams = (type: string, value: string) => "";
