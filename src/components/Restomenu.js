import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestomenu from "../utils/hooks/useRestoMenu";
import { MENU_MOCKS } from "../utils/menuMock";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const Restomenu = () => {
  const { resId } = useParams();
  const restomenu = useRestomenu(resId)
  if (restomenu === null) return <Shimmer />;

  // Extract restaurant header info
  const { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId } = restomenu?.cards[2]?.card?.card?.info;
  const { allcategories } = restomenu?.cards
  console.log(restomenu?.cards, "allcategories")
  return (
    <>
      <div className="max-w-7xl d-flex items-center justify-between">

        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + cloudinaryImageId} alt="" className="rounded-lg w-[600px] h-[400px]  overflow-hidden justi" />

      </div>
      <div className="text-center ">
        {name},
      </div>




    </>
  );
};

export default Restomenu;
