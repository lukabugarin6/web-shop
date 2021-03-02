import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="flex items-center text-xs" style={{ color: "#f0c040" }}>
      <span className='text-primary text-sm mr-1'>Prosečna ocena : </span>
      {rating >= 1 ? (
        <BsStarFill />
      ) : rating >= 0.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 2 ? (
        <BsStarFill />
      ) : rating >= 1.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 3 ? (
        <BsStarFill />
      ) : rating >= 2.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 4 ? (
        <BsStarFill />
      ) : rating >= 3.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 5 ? (
        <BsStarFill />
      ) : rating >= 4.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      <span className="ml-1 text-primary text-sm">({numReviews})</span>
    </div>
  );
};

export default Rating;
