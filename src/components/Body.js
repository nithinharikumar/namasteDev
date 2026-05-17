import RestaurantCard from "./RestoCard";
import { Restaurants } from "../utils/mock";
import { useState, useEffect } from "react";
import logo from "url:../assets/public/njanjan_logo_animated.gif";
import Shimmer from "./Shimmer";
import axios from "axios";
const Body = () => {
  //state variable

  const [listofrestuarents, setlistofrestuarents] = useState([]);
  const [filteredrestuarents, setfilteredrestuarents] = useState([]);
  const [SearchFilter, setSearchData] = useState("");

  console.log(listofrestuarents, "list of  res");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0180067&lng=76.3449567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json =
      data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setlistofrestuarents(json);
    setfilteredrestuarents(json);
  };

  const filterData = (SearchItem, delay) => {
    if (SearchItem) {
      setTimeout(() => {
        const filteresdata = listofrestuarents.filter((res) =>
          res?.info?.name.toLowerCase().includes(SearchItem.toLowerCase()),
        );
        setfilteredrestuarents(filteresdata);
      }, delay);
    } else {
      setfilteredrestuarents(listofrestuarents);
    }
  };

  return listofrestuarents.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="mx-auto">
      <div className="flex items-center gap-4 p-8">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="px-6 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow max-w-md shadow-sm"
          value={SearchFilter}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button
          className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
          onClick={() => filterData(SearchFilter, 0)}
        >
          Search
        </button>
        <div className="filter-container">
          <button
            className="filter-btn bg-green-400 cursor-pointer text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-500 transition-all shadow-lg"
            onClick={() => {
              const filteredList = listofrestuarents.filter(
                (res) => res?.info?.avgRating >= 4.5,
              );
              setfilteredrestuarents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-grid">
        {filteredrestuarents?.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res?.info} />
        ))}
      </div>
    </main>
  );
};
export default Body;
