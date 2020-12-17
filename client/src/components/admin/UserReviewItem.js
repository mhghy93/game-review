import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'react-bootstrap';
import DeleteUserReview from './DeleteUserReview';

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

  const [modalShow, setModalShow] = useState(false);

  const handleDeleteModal = () => {
    setModalShow(false);
  };

  return (
    <Card className="shadow bg-white rounded mb-3">
      <Card.Body>
        <Row>
          <Col>
            <p className="font-weight-bold">Id</p>
          </Col>
          <Col>
            <p className="font-weight-light">{review.id}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="font-weight-bold">Game Id</p>
          </Col>
          <Col>
            <p className="font-weight-light">{review.gameId}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="font-weight-bold">Game Title</p>
          </Col>
          <Col>
            {games.length > 0 ? (
              <p className="font-weight-light">{games[index].title}</p>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="font-weight-bold">Review</p>
          </Col>
          <Col>
            <p className="font-weight-light">{review.review}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="font-weight-bold">Rating</p>
          </Col>
          <Col>
            <p className="font-weight-light">
              {' '}
              <span className="text-warning">
                <i className="fa fa-star"></i>{' '}
              </span>
              {review.rating}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="font-weight-bold">Created On</p>
          </Col>
          <Col>
            <p className="font-weight-light">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <Button variant="danger" onClick={() => setModalShow(true)}>
              Delete Review
            </Button>
            <DeleteUserReview
              id={review.id}
              show={modalShow}
              onHide={handleDeleteModal}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

UserReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
};

export default UserReviewItem;
