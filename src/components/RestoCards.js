import React, { useEffect, useState } from "react";

import Card from "./Card";

const RestoCards = () => {
  const [restuarants, setRestaurants] = useState([]);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await result.json();
    setRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res?.info
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card-grid">
        {restuarants.map((res) => (
          <Card key={res?.id} resInfo={res} />
        ))}
      </div>
    </>
  );
};

export default RestoCards;
