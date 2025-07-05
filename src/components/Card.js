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
    <div className="w-[260px] leading-tight transition-transform duration-200 ease-in-out hover:scale-95">
      <img
        className="w-full h-[180px] object-cover rounded-[20px]"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="text-[#494949] p-2.5 text-[16px] overflow-hidden text-ellipsis">
        <div className="text-black text-[20px] font-black">{name}</div>
        <div>
          <span>{avgRatingString}</span>{" "}
          <span className="text-black font-semibold">{deliveryTime}</span>
        </div>
        <div>{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

export default Card;
