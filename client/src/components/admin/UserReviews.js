import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showUserReviews } from '../../actions/admin';
import { showAllGames } from '../../actions/game';
import UserReviewItem from './UserReviewItem';

const UserReviews = ({
  id,
  admin: { reviews },
  game: { games },
  showUserReviews,
  showAllGames,
}) => {
  useEffect(() => {
    showUserReviews(id);
  }, [showUserReviews, id]);

  useEffect(() => {
    showAllGames();
  }, [showAllGames]);

  return (
    <div className="mt-5">
      <h5 className="text-center mb-5">User Reviews</h5>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <UserReviewItem key={review.id} review={review} games={games} />
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
  game: PropTypes.object.isRequired,
  showAllGames: PropTypes.func.isRequired,
  showUserReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  game: state.game,
});

export default connect(mapStateToProps, { showUserReviews, showAllGames })(
  UserReviews
);
