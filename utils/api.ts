import axios from "axios";

const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "83df9abff4msh7301b4dcd5d09f0p1a34e0jsn74df098d3480",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  try {
    const { data } = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      {
        headers,
      }
    );
    if (data) {
      return data;
    } else {
      return new Error("Fail to fetch data!");
    }
  } catch (error) {
    return new Error("Server error!");
  }
};

export default fetchCars;
