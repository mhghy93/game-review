import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { loadUser } from '../../actions/auth';
import { userReviews } from '../../actions/profile';
import { showAllGames } from '../../actions/game';
import UserReviewItem from './UserReviewItem';

const UserProfile = ({
  auth: { user },
  profile: { reviews },
  game: { games },
  loadUser,
  userReviews,
  showAllGames,
}) => {
  useEffect(() => {
    loadUser();
    userReviews();
  }, [loadUser, userReviews]);

  useEffect(() => {
    showAllGames();
  }, [showAllGames]);

  return (
    <Fragment>
      <Card className="shadow bg-white rounded p-5">
        <Row>
          <Col xs={6} lg={4}>
            <Card.Img
              src="https://res.cloudinary.com/mhghy93/image/upload/v1578161259/blank-profile-picture-973460_1280_xf4t0m.png"
              variant="top"
            />
          </Col>
          <Col xs={6} lg={4}>
            <h5>{user.username}</h5>
            <Button variant="success">Edit Profile</Button>
            <p>Member since {new Date(user.createdAt).toLocaleDateString()}</p>
          </Col>
          <Col xs={6} lg={4}>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <UserReviewItem key={review.id} review={review} games={games} />
              ))
            ) : (
              <p>No Reviews added</p>
            )}
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

UserProfile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  userReviews: PropTypes.func.isRequired,
  showAllGames: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  game: state.game,
});

export default connect(mapStateToProps, {
  loadUser,
  userReviews,
  showAllGames,
})(UserProfile);
