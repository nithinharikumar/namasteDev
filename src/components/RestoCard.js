import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  //   console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="restaurant-card">
      <div className="h-48 overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-slate-500 text-sm mb-4">
          {cuisines.join(", ")} • {avgRating}
        </p>
        <p className="text-slate-500 text-sm mb-4">
          ₹{parseInt(costForTwo.match(/\d+/)[0]) / 2}
        </p>
        <div className="flex justify-between items-center text-sm font-bold text-slate-600 pt-4 border-t border-slate-50">
          <span className="flex items-center gap-1 text-rose-500">
            ★ {avgRating}
          </span>
          <span>{sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
