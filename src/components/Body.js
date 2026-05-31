import RestaurantCard from "./RestoCard";
import { Restaurants } from "../utils/mock";
import { useState, useEffect } from "react";
import useResturents from "../utils/hooks/useResturents";
import { Link } from "react-router-dom";
import logo from "url:../assets/public/njanjan_logo_animated.gif";
import Shimmer from "./Shimmer";
import axios from "axios";
import useSearch from "../utils/hooks/useSearch";
const Body = () => {
  const [SearchFilter, setSearchData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

  const listofrestuarents = useResturents();

  // Use custom search hook, which runs whenever searchQuery changes
  const searchedRestaurants = useSearch(searchQuery, listofrestuarents);

  // Derive final filtered list by applying top rated filter if toggled
  const filteredrestuarents = showTopRated
    ? searchedRestaurants.filter((res) => res?.info?.avgRating >= 4.5)
    : searchedRestaurants;

  return listofrestuarents.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Food Theme Hero Header */}
      <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-8 my-8 text-center shadow-sm border border-rose-100/50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2 animate-fade-in">
          Find the Best{" "}
          <span className="text-rose-500 font-black">Delicacies</span> Near You
        </h1>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Discover top-rated restaurants, sweet bakeries, and gourmet cafes, all
          prepared fresh and delivered instantly!
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-100 mb-8">
        <div className="flex flex-grow max-w-xl gap-3">
          <input
            type="text"
            placeholder="Search for delicious recipes or restaurants..."
            className="px-6 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow shadow-sm text-sm"
            value={SearchFilter}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            className="bg-rose-500 text-white font-bold px-8 py-3 rounded-2xl hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200/50 cursor-pointer text-sm"
            onClick={() => setSearchQuery(SearchFilter)}
          >
            Search 🔍
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`font-bold px-6 py-3 rounded-2xl transition-colors shadow-lg cursor-pointer text-sm ${showTopRated
              ? "bg-amber-600 text-white shadow-amber-300/50"
              : "bg-amber-500 text-white hover:bg-amber-600 shadow-amber-200/50"
              }`}
            onClick={() => {
              setShowTopRated(!showTopRated);
            }}
          >
            ⭐ Top Rated (4.5+)
          </button>

          <button
            className="bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 transition-colors font-bold px-6 py-3 rounded-2xl text-sm border border-slate-200 cursor-pointer"
            onClick={() => {
              setSearchData("");
              setSearchQuery("");
              setShowTopRated(false);
            }}
          >
            Reset Menu 🔄
          </button>
        </div>
      </div>

      {filteredrestuarents.length === 0 ? (
        <div className="text-center py-20 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto my-12">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-2xl font-bold text-slate-700 mb-1">
            No Recipes Found
          </h3>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">
            We couldn't find any restaurants matching "{searchQuery}". Try
            searching for another cuisine!
          </p>
        </div>
      ) : (
        <div className="restaurant-grid">
          {filteredrestuarents?.map((res) => (
            <Link
              key={res?.info?.id}
              to={"/menu/" + res?.info?.id}
              className="text-inherit no-underline hover:scale-[1.01] transition-transform duration-200"
            >
              <RestaurantCard resData={res?.info} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};
export default Body;
