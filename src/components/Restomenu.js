import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_MOCKS } from "../utils/menuMock";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const Restomenu = () => {
  const { resId } = useParams();
  const [restoInfo, setRestoInfo] = useState(null);

  useEffect(() => {
    // Use mock data for menu (live API blocked by Cloudflare/CORS)
    const mockData = MENU_MOCKS[resId];
    if (mockData) {
      setRestoInfo(mockData);
    } else {
      // Generic empty fallback for unknown restaurant IDs
      setRestoInfo({
        cards: [
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  id: resId,
                  name: "Restaurant",
                  cuisines: ["Multi-Cuisine"],
                  costForTwoMessage: "₹200 for two",
                  avgRatingString: "4.0",
                },
              },
            },
          },
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    {
                      card: {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "Menu",
                          itemCards: [],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      });
    }
  }, [resId]);

  if (restoInfo === null) return <Shimmer />;

  // Extract restaurant header info
  const restaurantInfo =
    restoInfo?.cards?.find(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info || {};

  const { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId } =
    restaurantInfo;

  // Extract all menu items from REGULAR cards
  const regularCards = restoInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = [];
  regularCards?.forEach((c) => {
    const card = c?.card?.card;
    if (card?.itemCards) {
      categories.push({ title: card.title, items: card.itemCards });
    } else if (card?.categories) {
      card.categories.forEach((cat) => {
        categories.push({ title: cat.title, items: cat.itemCards || [] });
      });
    }
  });

  const allItems = categories.flatMap((cat) => cat.items);

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      {/* Restaurant Header */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-8">
        {cloudinaryImageId && (
          <div className="h-48 w-full overflow-hidden">
            <img
              src={CDN_URL + cloudinaryImageId}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-1">{name}</h1>
          <p className="text-rose-500 font-semibold text-sm mb-3">
            {cuisines?.join(", ")} — {costForTwoMessage}
          </p>
          {avgRatingString && (
            <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full">
              ★ {avgRatingString}
            </span>
          )}
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-5">Menu</h2>

        {allItems.length === 0 ? (
          <p className="text-slate-500 text-sm text-center py-10">
            No menu items available.
          </p>
        ) : (
          <ul className="space-y-4">
            {allItems.map((item) => {
              const info = item?.card?.info;
              if (!info) return null;
              const price = (info.price || info.defaultPrice) / 100;

              return (
                <li
                  key={info.id}
                  className="flex justify-between items-start py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/40 px-2 rounded-xl transition-colors gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {/* Veg / Non-veg dot */}
                      {info.isVeg ? (
                        <span className="w-4 h-4 border-2 border-emerald-500 flex items-center justify-center rounded-sm flex-shrink-0">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full block" />
                        </span>
                      ) : (
                        <span className="w-4 h-4 border-2 border-red-500 flex items-center justify-center rounded-sm flex-shrink-0">
                          <span className="w-2 h-2 bg-red-500 rounded-full block" />
                        </span>
                      )}
                      <span className="font-bold text-slate-800 text-sm">
                        {info.name}
                      </span>
                      {info.isBestseller && (
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                          ⭐ Bestseller
                        </span>
                      )}
                    </div>

                    <span className="text-sm font-bold text-slate-700">₹{price}</span>

                    {info.description && (
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {info.description}
                      </p>
                    )}

                    {info.ratings?.aggregatedRating?.rating && (
                      <span className="text-xs text-emerald-600 font-semibold mt-1 block">
                        ★ {info.ratings.aggregatedRating.rating} (
                        {info.ratings.aggregatedRating.ratingCount})
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    {info.imageId && (
                      <img
                        src={CDN_URL + info.imageId}
                        alt={info.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-slate-100"
                      />
                    )}
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-1.5 rounded-xl transition-colors shadow-sm cursor-pointer w-full text-center">
                      ADD +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Restomenu;
