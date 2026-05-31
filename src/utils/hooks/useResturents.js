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
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0180067&lng=76.3449567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json =
        data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        [];

      if (json.length === 0) {
        throw new Error("Swiggy API returned empty list.");
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
