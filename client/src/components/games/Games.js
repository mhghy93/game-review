import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from './GamesListItem';
import { showGames } from '../../actions/game';
import { showAllReviews } from '../../actions/review';
import PageNumbers from '../pagination/PageNumbers';

const Games = ({
  game: { games, totalPages, currentPage },
  review: { allReviews },
  showGames,
  showAllReviews,
}) => {
  useEffect(() => {
    showGames();
  }, [showGames]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  return (
    <Fragment>
      {games.length > 0 ? (
        <Row className="mt-5">
          {games.map((game) => (
            <GamesListItem key={game.id} game={game} allReviews={allReviews} />
          ))}
        </Row>
      ) : (
        <p className="lead mt-5 text-center">No Games Found</p>
      )}
      <PageNumbers
        totalPages={totalPages}
        type="lg"
        currentPage={Number(currentPage) + 1}
      />
    </Fragment>
  );
};

Games.propTypes = {
  game: PropTypes.object.isRequired,
  showGames: PropTypes.func.isRequired,
  showAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  review: state.review,
});

export default connect(mapStateToProps, {
  showGames,
  showAllReviews,
})(Games);
