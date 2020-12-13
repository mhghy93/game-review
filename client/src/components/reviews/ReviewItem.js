import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const ReviewItem = ({ review }) => {
  return (
    <Fragment>
      <Card className="mb-3">
        <p className="ml-3 mt-3">Rating {review.rating}</p>
        <Card.Subtitle className="ml-3 text-muted">
          {' '}
          Reviewed on {new Date(review.createdAt).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Body>
          {review.review.substring(0, 200)}...
          <Button variant="link">See More</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
