import React, { Fragment, useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { editGameReview, showGameReviewDetail } from '../../actions/review';

const EditReview = ({
  match,
  editGameReview,
  showGameReviewDetail,
  review: { gameReview },
}) => {
  useEffect(() => {
    showGameReviewDetail(match.params.id);
  }, [showGameReviewDetail, match.params.id]);

  const [formData, setFormData] = useState({
    review: '',
    rating: '',
  });

  useEffect(() => {
    setFormData({
      review: gameReview.review,
      rating: gameReview.rating,
    });
  }, [gameReview]);

  const { review, rating } = formData;

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    editGameReview(match.params.id, {
      review,
      rating,
    });
  };

  const ratingChanged = (newRating) => {
    setFormData({ ...formData, rating: newRating.toString() });
  };

  return (
    <Fragment>
      <LinkContainer to="/user/profile">
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
          {Number(rating) > 0 ? (
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={Number(rating)}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          ) : (
            <p>Loading ..</p>
          )}
        </Form.Group>
        <Button variant="warning" type="submit" block>
          <i className="fas fa-plus"></i> Update Review
        </Button>
      </Form>
    </Fragment>
  );
};

EditReview.propTypes = {
  editGameReview: PropTypes.func.isRequired,
  showGameReviewDetail: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, {
  editGameReview,
  showGameReviewDetail,
})(EditReview);
