import React from 'react';
import ReactStars from 'react-rating-stars-component';

const AverageRating = () => {
  return (
    <ReactStars
      count={5}
      size={24}
      value={4.5}
      edit={false}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
};

export default AverageRating;
