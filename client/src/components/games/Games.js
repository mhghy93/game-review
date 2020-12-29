import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from './GamesListItem';
import { showAllGames } from '../../actions/game';
import { showAllReviews } from '../../actions/review';

const Games = ({
  game: { games },
  review: { allReviews },
  showAllGames,
  showAllReviews,
}) => {
  useEffect(() => {
    showAllGames();
  }, [showAllGames]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  return (
    <Fragment>
      <Row className="mt-5">
        {games.map((game) => (
          <GamesListItem key={game.id} game={game} allReviews={allReviews} />
        ))}
      </Row>
    </Fragment>
  );
};

Games.propTypes = {
  game: PropTypes.object.isRequired,
  showAllGames: PropTypes.func.isRequired,
  showAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  review: state.review,
});

export default connect(mapStateToProps, { showAllGames, showAllReviews })(
  Games
);
