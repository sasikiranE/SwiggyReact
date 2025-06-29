import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const { restaurantDetails, restaurantMenu } = useRestaurantInfo(restaurantId);

  console.log(restaurantDetails);
  console.log(restaurantMenu);

  return (
    <div>
      {/* TODO:: Create a component for restaurant details TODO:: Create a compoent
      for restaurant menu items */}
    </div>
  );
};

export default RestaurantMenu;
