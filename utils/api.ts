import axios from "axios";
import { ICar } from ".";

const fetchCars = async (): Promise<any> => {
  const headers = {
    "X-RapidAPI-Key": "83df9abff4msh7301b4dcd5d09f0p1a34e0jsn74df098d3480",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  try {
    const { data } = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      { headers }
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error("Server error!");
  }
};

const fetchCarImage = async (car: ICar, angle: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
};

export default fetchCars;
