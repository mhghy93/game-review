import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from '../games/GamesListItem';
import { searchGamesByPlatform } from '../../actions/game';
import { showAllReviews } from '../../actions/review';
import PageNumbers from '../pagination/PageNumbers';

const GamesByPlatform = ({
  location,
  game: { games, totalPages, currentPage },
  review: { allReviews },
  searchGamesByPlatform,
  showAllReviews,
}) => {
  useEffect(() => {
    searchGamesByPlatform(location.search);
  }, [searchGamesByPlatform, location.search]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  const path = location.search.split('&')[0] + '&page=';

  return (
    <Fragment>
      <Row>
        {games.length > 0 ? (
          <Fragment>
            {games.map((game) => (
              <GamesListItem
                key={game.id}
                game={game}
                allReviews={allReviews}
              />
            ))}
          </Fragment>
        ) : (
          <p className="lead">No games found</p>
        )}
      </Row>
      <PageNumbers
        totalPages={totalPages}
        type="lg"
        path={path}
        currentPage={Number(currentPage) + 1}
      />
    </Fragment>
  );
};

GamesByPlatform.propTypes = {
  game: PropTypes.object.isRequired,
  searchGamesByPlatform: PropTypes.func.isRequired,
  showAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  review: state.review,
});

export default connect(mapStateToProps, {
  searchGamesByPlatform,
  showAllReviews,
})(GamesByPlatform);
