import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const ReviewItem = ({ review, profiles }) => {
  let index = 0;
  if (profiles.length > 0) {
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i].id === review.userId) {
        index = i;
        break;
      }
    }
  }

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
          {profiles.length > 0 ? (
            <p>{profiles[index].username}</p>
          ) : (
            <p>Loading...</p>
          )}
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
  profiles: PropTypes.array.isRequired,
};

export default ReviewItem;
