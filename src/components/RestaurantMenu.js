import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurant details");
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

  return (
    <div>
      {/* TODO:: Create a component for restaurant details TODO:: Create a compoent
      for restaurant menu items */}
    </div>
  );
};

export default RestaurantMenu;
