import RestaurantCard from "./RestoCard";
import resobj from "../utils/mock";
import { useState } from "react";
const Body = () => {
  //state variable
  let restaurants = [
    {
      id: "4709823",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/bbc4fee6-b3d6-4d01-98c9-680f8f7779ac_470982.JPG",
      locality: "Eranjal Road",
      areaName: "Chalukunnu",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 2.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "2.6",
      totalRatingsString: "775",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
    {
      id: "378010",
      name: "Ibaco",
      cloudinaryImageId: "kawgjvja4kmlhqsfti4o",
      locality: "Kanjikuzhi",
      areaName: "Kottayam",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.8,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.8",
      totalRatingsString: "772",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
    {
      id: "470982",
      name: "Baskin dfdffd Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/bbc4fee6-b3d6-4d01-98c9-680f8f7779ac_470982.JPG",
      locality: "Eranjal Road",
      areaName: "Chalukunnu",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 2.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "2.6",
      totalRatingsString: "775",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  ];
  const [listofrestuarents, setlistofrestuarents] = useState(restaurants);

  //this is   normal js vriable, not a state variable
  // react doesn't know about this variable
  // so it won't re-render the component when this variable changes
  // that's why we need to use useState hook for this

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 p-8">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="px-6 py-3 rounded-2xl border border-white-200 focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow max-w-md shadow-sm"
        />
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
          Search
        </button>
        <div className="filter-container">
          <button
            className="filter-btn bg-green-400 cursor-pointer text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-500 transition-all shadow-lg"
            onClick={() => {
              let filteredList = restaurants.filter(
                (res) => res.avgRating >= 4.5,
              );
              setlistofrestuarents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-grid">
        {listofrestuarents.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </main>
  );
};
export default Body;
