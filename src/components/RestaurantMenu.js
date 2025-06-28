import React from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);
  return (
    <div>
      <h1>RestaurantMenu for {`${restaurantId}`}</h1>
    </div>
  );
};

export default RestaurantMenu;
