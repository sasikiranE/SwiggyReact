import React, { useEffect, useState } from "react";

import Card from "./Card";
import Shimmer from "./Shimmer";

const RestoCards = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await result.json();
    console.log(data);
    const resList =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res?.info
      );
    setRestaurants(resList ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="card-grid">
        {restaurants.map((res) => (
          <Card key={res?.id} resInfo={res} />
        ))}
      </div>
    </>
  );
};

export default RestoCards;
