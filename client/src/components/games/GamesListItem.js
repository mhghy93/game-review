import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AverageRating from '../reviews/AverageRating';
import Loading from '../layout/Loading';

const GamesListItem = ({ game, allReviews }) => {
  let averageRating = 0;
  let sum = 0;
  let gameReviews = [];

  if (allReviews.length > 0) {
    gameReviews = allReviews.filter((review) => review.gameId === game.id);
    for (let i = 0; i < gameReviews.length; i++) {
      sum += Number(gameReviews[i].rating);
    }
    averageRating = sum / gameReviews.length;
  }

  return (
    <Fragment>
      <Col className="mb-5" lg={4}>
        <Card className="shadow bg-white rounded h-100">
          <LinkContainer to={`/game/${game.id}`}>
            <Card.Img
              className="card-image"
              variant="top"
              src={game.displayPic}
            />
          </LinkContainer>
          <Card.Body>
            <div className="mb-2">
              {allReviews.length > 0 ? (
                <Fragment>
                  {averageRating > 0 ? (
                    <AverageRating rating={averageRating.toString()} />
                  ) : (
                    <Fragment>
                      <AverageRating rating={'0'} />{' '}
                      <span className="text-muted ml-3">Not reviewed yet</span>
                    </Fragment>
                  )}
                </Fragment>
              ) : (
                <Loading />
              )}
            </div>
            <Card.Title>{game.title}</Card.Title>
            <LinkContainer to={`/game/${game.id}`}>
              <Badge className="p-3 mr-3" variant="warning" pill>
                <i className="fas fa-play"></i> Trailer
              </Badge>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

GamesListItem.propTypes = {
  game: PropTypes.object.isRequired,
  allReviews: PropTypes.array.isRequired,
};

export default GamesListItem;
