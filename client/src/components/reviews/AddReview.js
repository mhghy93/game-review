import React, { Fragment, useState } from 'react';
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
          <Form.Check
            type="radio"
            label="1"
            name="rating"
            value={1}
            onChange={handleOnChange}
            id="rating1"
          />
          <Form.Check
            type="radio"
            label="2"
            name="rating"
            value={2}
            onChange={handleOnChange}
            id="rating2"
          />
          <Form.Check
            type="radio"
            label="3"
            name="rating"
            value={3}
            onChange={handleOnChange}
            id="rating3"
          />
          <Form.Check
            type="radio"
            label="4"
            name="rating"
            value={4}
            onChange={handleOnChange}
            id="rating4"
          />
          <Form.Check
            type="radio"
            label="5"
            name="rating"
            value={5}
            onChange={handleOnChange}
            id="rating5"
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
