import React, { useEffect, useState } from "react";

import Card from "./Card";
import Shimmer from "./Shimmer";
import Search from "./Search";

const RestoCards = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setAllRestaurants(resList ?? []);
    setFilteredRestaurants(resList ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const doSearch = () => {
    const filtered = allRestaurants.filter((res) => {
      return res.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filtered);
  };

  return (
    <>
      <div className="section-body">
        <Search
          value={searchText}
          onChange={(value) => setSearchText(value)}
          onSearch={doSearch}
        />
        <div className="card-grid">
          {filteredRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurants.map((res) => (
              <Card key={res?.id} resInfo={res} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RestoCards;
