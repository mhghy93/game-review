import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';

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
        <Loading />
      )}
    </Fragment>
  );
};

AverageRating.propTypes = {
  rating: PropTypes.string,
};

export default AverageRating;
