import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'react-bootstrap';
import DeleteUserReview from './DeleteUserReview';

const UserReviewItem = ({ review }) => {
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
            <p className="font-weight-light">{review.rating}</p>
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
};

export default UserReviewItem;
