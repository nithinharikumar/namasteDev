const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="restaurant-card">
      <div className="h-48 overflow-hidden">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-slate-500 text-sm mb-4">
          {cuisines.join(", ")} • {avgRating}
        </p>
        <p className="text-slate-500 text-sm mb-4">{costForTwo}</p>
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
