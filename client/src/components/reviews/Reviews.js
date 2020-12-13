import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewItem from './ReviewItem';
import { showAllGameReviews } from '../../actions/review';

const Reviews = ({ id, review: { reviews }, showAllGameReviews }) => {
  useEffect(() => {
    showAllGameReviews(id);
  }, [showAllGameReviews, id]);

  return (
    <Fragment>
      <div className="mt-5">
        <h5 className="mb-3">User Reviews</h5>
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
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { showAllGameReviews })(Reviews);
