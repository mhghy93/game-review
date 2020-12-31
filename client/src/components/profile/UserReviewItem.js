import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DeleteReview from '../reviews/DeleteReview';
import Loading from '../layout/Loading';

const UserReviewItem = ({ review, games }) => {
  let index = 0;
  if (games.length > 0) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === review.gameId) {
        index = i;
        break;
      }
    }
  }

  const [showMore, setShowMore] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleShowMore = (e) => {
    e.preventDefault();
    setShowMore(true);
  };

  const handleShowLess = (e) => {
    e.preventDefault();
    setShowMore(false);
  };

  const handleDeleteModal = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
      <Card className="mb-3">
        <p className="ml-3 mt-3">
          <span className="text-warning">
            <i className="fa fa-star"></i>{' '}
          </span>{' '}
          {review.rating}
        </p>
        <Card.Subtitle className="ml-3 text-muted">
          {' '}
          Reviewed on {new Date(review.createdAt).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Subtitle className="ml-3 mt-2 text-muted">
          {games.length > 0 ? <p>{games[index].title}</p> : <Loading />}
        </Card.Subtitle>
        <Card.Body>
          {showMore ? (
            <Fragment>
              {review.review}
              <Button onClick={handleShowLess} variant="link">
                Show Less
              </Button>
              <div className="mt-3">
                <LinkContainer to={`/user/profile/review/edit/${review.id}`}>
                  <Button className="mr-3" variant="success">
                    <i className="fas fa-pencil-alt"></i> Edit
                  </Button>
                </LinkContainer>
                <Button variant="danger" onClick={() => setModalShow(true)}>
                  <i className="fas fa-trash-alt"></i> Delete
                </Button>
                <DeleteReview
                  id={review.id}
                  show={modalShow}
                  onHide={handleDeleteModal}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              {review.review.substring(0, 200)}
              {' ....'}
              <Button onClick={handleShowMore} variant="link">
                See More
              </Button>
            </Fragment>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

UserReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
};

export default UserReviewItem;
