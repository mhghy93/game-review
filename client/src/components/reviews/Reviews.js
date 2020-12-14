import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewItem from './ReviewItem';
import { showAllGameReviews, showAverageRating } from '../../actions/review';
import AverageRating from './AverageRating';

const Reviews = ({
  id,
  review: { reviews, averageRating },
  showAllGameReviews,
  showAverageRating,
}) => {
  useEffect(() => {
    showAllGameReviews(id);
  }, [showAllGameReviews, id]);

  useEffect(() => {
    showAverageRating(id);
  }, [showAverageRating, id]);

  return (
    <Fragment>
      <div className="mt-5">
        <div className="mb-3">
          <h5>User Reviews</h5>
          <AverageRating rating={averageRating.averageRating} />
        </div>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        ) : (
          <p>No Reviews added</p>
        )}
      </div>
    </Fragment>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  review: PropTypes.object.isRequired,
  showAllGameReviews: PropTypes.func.isRequired,
  showAverageRating: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, {
  showAllGameReviews,
  showAverageRating,
})(Reviews);
