import React, { Fragment, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { addGameReview } from '../../actions/review';

const AddReview = ({ match, addGameReview }) => {
  const [formData, setFormData] = useState({
    review: '',
    rating: '',
  });

  const { review, rating } = formData;

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGameReview(
      {
        review,
        rating,
      },
      match.params.gameId
    );
  };

  const ratingChanged = (newRating) => {
    setFormData({ ...formData, rating: newRating.toString() });
  };

  return (
    <Fragment>
      <LinkContainer to={`/game/${match.params.gameId}`}>
        <Button variant="light">Back</Button>
      </LinkContainer>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="review"
            value={review}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rate</Form.Label>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Form.Group>
        <Button variant="warning" type="submit" block>
          <i className="fas fa-plus"></i> Add Review
        </Button>
      </Form>
    </Fragment>
  );
};

AddReview.propTypes = {
  addGameReview: PropTypes.func.isRequired,
};

export default connect(null, { addGameReview })(AddReview);
