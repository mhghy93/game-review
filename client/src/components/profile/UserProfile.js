import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { loadUser } from '../../actions/auth';
import { userReviews } from '../../actions/profile';
import { showAllGames } from '../../actions/game';
import UserReviewItem from './UserReviewItem';
import UserRatingItem from './UserRatingItem';
import DeleteProfile from './DeleteProfile';

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

  const [modalShow, setModalShow] = useState(false);

  const handleDeleteModal = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
      <Card className="shadow bg-white rounded p-5">
        <Row>
          <Col xs={12} lg={6}>
            <Card.Img
              src="https://res.cloudinary.com/mhghy93/image/upload/v1578161259/blank-profile-picture-973460_1280_xf4t0m.png"
              variant="top"
            />
            <h5 className="mt-3">{user.username}</h5>
            <LinkContainer to="/user/profile/edit">
              <Button variant="success">
                {' '}
                <i className="fas fa-pencil-alt"></i> Edit Profile
              </Button>
            </LinkContainer>
            <p className="mt-3">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-3">{reviews.length} games reviewed</p>
            <div className="mt-5">
              <h5 className="mb-3">My Ratings</h5>
              {reviews.length > 0 ? (
                <Row>
                  {reviews.map((review) => (
                    <UserRatingItem
                      key={review.id}
                      review={review}
                      games={games}
                    />
                  ))}
                </Row>
              ) : (
                <p>No Ratings</p>
              )}
              <Button
                className="mt-3"
                variant="danger"
                onClick={() => setModalShow(true)}
              >
                <i className="fas fa-trash-alt"></i> Delete Account
              </Button>
              <DeleteProfile show={modalShow} onHide={handleDeleteModal} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <h5>My Reviews</h5>
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
