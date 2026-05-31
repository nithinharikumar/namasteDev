import { useState, useEffect } from 'react';

const useSearch = (searchitem, restuarentlist) => {
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        if (!Array.isArray(restuarentlist)) {
            setFilter([]);
            return;
        }

        const filteredList = restuarentlist.filter((res) =>
            res?.info?.name?.toLowerCase().includes((searchitem || "").toLowerCase())
        );
        setFilter(filteredList);
    }, [searchitem, restuarentlist]);

    return filter;
};

export default useSearch;