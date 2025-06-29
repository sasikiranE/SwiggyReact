import { useState, useEffect } from "react";

const useRestaurantInfo = (restaurantId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch restaurant details, statusCode - ",
          response.status
        );
      }

      const data = await response.json();
      const resInfo = data?.data?.cards[2]?.card?.card?.info;
      const resMenu =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item) => item?.card?.info
        );

      setRestaurantDetails(resInfo);
      setRestaurantMenu(resMenu ?? []);
    } catch (error) {
      console.error("Error fetching restuarant details and menu", error);
    }
  };

  return { restaurantMenu, restaurantDetails };
};

export default useRestaurantInfo;
