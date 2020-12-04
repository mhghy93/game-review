import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { showGameDetail } from '../../actions/game';

const UserReviewItem = ({ review, game: { game }, showGameDetail }) => {
  useEffect(() => {
    showGameDetail(review.gameId);
  }, [showGameDetail]);

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
            <p className="font-weight-light">{game.title}</p>
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
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

UserReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  showGameDetail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGameDetail })(UserReviewItem);
