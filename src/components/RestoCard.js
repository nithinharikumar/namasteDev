import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData) return null;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="restaurant-card bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 w-[300px]">
      <div className="h-48 overflow-hidden relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {avgRating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl flex items-center gap-1 shadow-sm font-bold text-xs text-slate-800">
            <span className="text-amber-500">★</span> {avgRating}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-850 mb-1 truncate" title={name}>
          {name}
        </h3>
        <p className="text-slate-500 text-xs mb-4 truncate">
          {cuisines?.join(", ")}
        </p>
        <div className="flex justify-between items-center text-xs font-bold text-slate-600 pt-4 border-t border-slate-100">
          <span className="text-slate-700">{costForTwo}</span>
          {sla?.slaString && (
            <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-xl font-semibold">
              {sla.slaString}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
