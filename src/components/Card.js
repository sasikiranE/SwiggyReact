import React from "react";

const Card = (props) => {
  const { resInfo } = props;
  const {
    id,
    name,
    areaName,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    sla,
  } = resInfo;

  const { slaString: deliveryTime } = sla;

  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>
      <div className="card-details">
        <div className="card-name">{name}</div>
        <div>
          <span className="rating">{avgRatingString}</span>{" "}
          <span className="time">{deliveryTime}</span>
        </div>
        <div className="food-items">{cuisines.join(", ")}</div>
        <div className="area">{areaName}</div>
      </div>
    </div>
  );
};

export default Card;
