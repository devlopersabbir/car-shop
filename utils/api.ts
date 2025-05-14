import axios from "axios";
import { ICar } from "./interface";

const fetchCars = async (): Promise<ICar[]> => {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "x-rapidapi-key": "83df9abff4msh7301b4dcd5d09f0p1a34e0jsn74df098d3480",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    throw new Error("Server error!");
  }
};

export default fetchCars;
