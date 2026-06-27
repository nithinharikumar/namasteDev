import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestomenu from "../utils/hooks/useRestoMenu";
import RestaurantCategory from "./RestaurantCategory";
import clsx from "clsx";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";



const Restomenu = () => {
  const { resId } = useParams();
  const restomenu = useRestomenu(resId);
  const [showIndex, setShowIndex] = useState(null)



  if (restomenu === null) return <Shimmer />;

  // Extract restaurant header info
  const { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId } = restomenu?.cards[2]?.card?.card?.info || {};
  const { allcategories } = restomenu?.cards || {};
  const groupedCards = { ...restomenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards };
  const item = restomenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const itemcards = item.filter(item => item?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')



  return (
    <>
      <div className={clsx('w-full', 'max-w-4xl', 'mx-auto', 'h-[150px]', 'overflow-hidden', 'bg-red-200', 'flex', 'items-center', 'justify-center')}>
        <img alt="the restaurant" src={CDN_URL + cloudinaryImageId} className={clsx('rounded-lg', 'w-full', 'h-[300px]', 'object-cover')} />
      </div>
      <div className={clsx('text-center ', 'justify-center', 'items-center', 'cursor-pointer', 'select-none')}>
        <h1 >{name}</h1>
        <p>{cuisines?.map((cuisine, index) => (
          <span key={index} className={clsx('')} >{cuisine}{index < cuisines.length - 1 ? ", " : ""}</span>
        ))}</p>
      </div >
      <div className={clsx('h-[1000px]', 'w-full')}>
        <div className={clsx('w-full', 'max-w-4xl', 'bg-amber-50', 'h-auto', 'mx-auto', 'pb-10', 'cursor-pointer')}>
          {
            itemcards.map((groupCard, index) => (
              <RestaurantCategory
                key={index}
                data={groupCard?.card?.card}
                showItems={index === showIndex ? true : false}
                // setShowIndex={() => setShowIndex(index)}
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}

              />
            ))
          }
        </div>
        <div className={clsx('w-full', 'max-w-4xl', 'bg-amber-50', 'h-[1000px]', ' mx-auto')}>
        </div>
      </div>
    </>
  );
};

export default Restomenu;
