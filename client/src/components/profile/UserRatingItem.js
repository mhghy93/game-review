import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import Loading from '../layout/Loading';

const UserRatingItem = ({ review, games }) => {
  let index = 0;
  if (games.length > 0) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === review.gameId) {
        index = i;
        break;
      }
    }
  }

  return (
    <Fragment>
      <Col className="mb-3" lg={6}>
        <Card className="shadow bg-white rounded h-100">
          <Fragment>
            {games.length > 0 ? (
              <Card.Img
                className="card-image"
                variant="top"
                src={games[index].displayPic}
              />
            ) : (
              <Loading />
            )}
          </Fragment>
          <Card.Body>
            <Card.Title>
              {' '}
              <span className="text-warning">
                <i className="fa fa-star"></i>{' '}
              </span>{' '}
              {review.rating}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

UserRatingItem.propTypes = {
  review: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
};

export default UserRatingItem;
