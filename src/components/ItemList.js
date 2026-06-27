import React from "react";
import clsx from "clsx";
import AddButton from "./AddButton";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const ItemList = ({ items }) => {
  return (
    <div className={clsx('divide-y', 'divide-gray-100')}>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className={clsx('py-6', 'border-b', 'last:border-b-0', 'flex', 'justify-between', 'gap-6', 'items-center')}>
          {/* Left Side: Item Details */}
          <div className={clsx('flex-1', 'text-left')}>
            <h3 className={clsx('font-semibold', 'text-gray-800')}>{item?.card?.info?.name}</h3>
            <p className={clsx('text-sm', 'font-semibold', 'text-gray-700', 'mt-1')}>
              ₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
            </p>
            <p className={clsx('text-xs', 'text-gray-400', 'mt-2', 'leading-relaxed')}>{item?.card?.info?.description}</p>
          </div>

          {/* Right Side: Image and ADD Button */}
          <div className={clsx('relative', 'w-32', 'h-24', 'flex-shrink-0', 'flex', 'flex-col', 'items-center', 'justify-center')}>
            {item?.card?.info?.imageId ? (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className={clsx('rounded-lg', 'w-full', 'h-full', 'object-cover', 'm-[10px]')}
                alt={item?.card?.info?.name}
              />
            ) : (
              <div className={clsx('w-full', 'h-full', 'bg-gray-50', 'border', 'border-dashed', 'border-gray-200', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'text-[10px]', 'text-gray-400')}>
                No Image
              </div>
            )}
            <AddButton item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
