import { useState, useEffect } from "react";

const useRestomenu = (resId) => {
  const [restomenu, setRestomenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch("/api/v1/listRestaurantMenu/" + resId);
      const json = await response.json();
      if (json?.data) {
        setRestomenu(json.data);
      }
    } catch (error) {
      console.error("Error fetching menu in useRestomenu hook:", error);
    }
  };

  return restomenu;
};

export default useRestomenu;