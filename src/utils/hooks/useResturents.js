import { useState, useEffect } from "react";
import axios from "axios";
import { Restaurants } from "../mock";

const useResturents = () => {
  const [listofrestuarents, setlistofrestuarents] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await axios.get(
        "/api/v1/listRestaurants"
      );

      const cards = data.data?.data?.cards || data.data?.data?.data?.cards || [];
      const restaurantCard = cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const json = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      if (json.length === 0) {
        throw new Error("API returned empty list or could not find restaurants card.");
      }

      setlistofrestuarents(json);

    } catch (error) {
      console.warn(
        "⚠️ Swiggy CORS/Cloudflare Block Detected. Safely falling back to local gourmet restaurants!",
        error,
      );
      setlistofrestuarents(Restaurants);

    }
  };

  return listofrestuarents;
};

export default useResturents;
