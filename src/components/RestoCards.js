import React, { useEffect, useState } from "react";

import Card from "./Card";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router";

const RestoCards = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      const resList =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (res) => res?.info
        );
      setAllRestaurants(resList ?? []);
      setFilteredRestaurants(resList ?? []);
    } catch (error) {
      console.error(error);
    }
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
      <div className="mx-2.5 my-5">
        <Search
          value={searchText}
          onChange={(value) => setSearchText(value)}
          onSearch={doSearch}
        />
        <div className="flex flex-wrap gap-5 justify-items-start mt-2">
          {filteredRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurants.map((res) => (
              <Link key={res?.id} to={`/${res?.id}`} className="link">
                <Card resInfo={res} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RestoCards;
