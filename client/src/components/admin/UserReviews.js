import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showUserReviews } from '../../actions/admin';
import UserReviewItem from './UserReviewItem';

const UserReviews = ({ id, admin: { reviews }, showUserReviews }) => {
  useEffect(() => {
    showUserReviews(id);
  }, [showUserReviews]);

  return (
    <div className="mt-5">
      <h5 className="text-center mb-5">User Reviews</h5>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <UserReviewItem key={review.id} review={review} />
        ))
      ) : (
        <h5 className="text-center mb-5">User has not reviewed any game</h5>
      )}
    </div>
  );
};

UserReviews.propTypes = {
  id: PropTypes.string.isRequired,
  admin: PropTypes.object.isRequired,
  showUserReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { showUserReviews })(UserReviews);
