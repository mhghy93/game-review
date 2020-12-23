import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AverageRating = ({ rating }) => {
  return (
    <Fragment>
      {Number(rating) >= 0 ? (
        <Fragment>
          {/* <p> */}
          <span className="text-warning">
            <i className="fa fa-star"></i>{' '}
          </span>
          {Number(rating).toString()}
          {/* </p> */}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

AverageRating.propTypes = {
  rating: PropTypes.string,
};

export default AverageRating;
