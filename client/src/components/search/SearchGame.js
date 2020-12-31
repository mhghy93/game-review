import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from '../games/GamesListItem';
import { searchGames } from '../../actions/game';
import { showAllReviews } from '../../actions/review';
import PageNumbers from '../pagination/PageNumbers';

const SearchGame = ({
  location,
  game: { games, loading, totalPages, currentPage },
  review: { allReviews },
  searchGames,
  showAllReviews,
}) => {
  useEffect(() => {
    searchGames(location.search);
  }, [searchGames, location.search]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  const path = location.search.split('&')[0] + '&page=';

  return (
    <Fragment>
      <Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
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
          </Fragment>
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

SearchGame.propTypes = {
  game: PropTypes.object.isRequired,
  searchGames: PropTypes.func.isRequired,
  showAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  review: state.review,
});

export default connect(mapStateToProps, {
  searchGames,
  showAllReviews,
})(SearchGame);
