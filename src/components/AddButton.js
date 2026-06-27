import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/Slices/cartSlice";
import clsx from "clsx";

const AddButton = ({ item }) => {
    console.log(item, "item is here")
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch();



    const handleClick = (item) => {
        // setCount(1);
        dispatch(addItem(item));
    };


    return (
        <button
            onClick={() => handleClick(item)}
            className={clsx('absolute', '-bottom-2', 'left-1/2', '-translate-x-1/2', 'bg-white', 'text-green-600', 'font-bold', 'px-6', 'py-1.5', 'rounded-lg', 'shadow-md', 'border', 'border-gray-200', 'text-xs', 'hover:bg-green-50', 'active:scale-95', 'transition-all')}
            style={{ marginTop: "-108px", marginLeft: "-105px" }}
        >
            ADD
        </button>
    );



};

export default AddButton;