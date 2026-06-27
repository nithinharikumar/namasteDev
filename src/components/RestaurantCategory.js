import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mb-8 border border-gray-100 rounded-2xl bg-white shadow-sm p-6">
      <h2 
        onClick={handleClick} 
        className="text-xl font-bold text-gray-800 mb-4 tracking-tight text-left cursor-pointer select-none flex justify-between items-center"
      >
        <span>{data.title} ({data.itemCards?.length || 0})</span>
        <span className="text-gray-500 text-lg">{showItems ? "▲" : "▼"}</span>
      </h2>
      
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
