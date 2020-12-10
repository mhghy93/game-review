import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const GamesListItem = ({ game }) => {
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
            <Card.Title>{game.title}</Card.Title>
            <a
              href={game.trailerLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Badge className="p-3 mr-3" variant="warning" pill>
                <i className="fas fa-play"></i> Trailer
              </Badge>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

GamesListItem.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GamesListItem;
