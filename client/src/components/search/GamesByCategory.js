import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from '../games/GamesListItem';
import { searchGamesByCategory } from '../../actions/game';
import { showAllReviews } from '../../actions/review';
import PageNumbers from '../pagination/PageNumbers';
import Loading from '../layout/Loading';

const GamesByCategory = ({
  location,
  game: { games, totalPages, currentPage, loading },
  review: { allReviews },
  searchGamesByCategory,
  showAllReviews,
}) => {
  useEffect(() => {
    searchGamesByCategory(location.search);
  }, [searchGamesByCategory, location.search]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  const path = location.search.split('&')[0] + '&page=';

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </Fragment>
  );
};

GamesByCategory.propTypes = {
  game: PropTypes.object.isRequired,
  searchGamesByCategory: PropTypes.func.isRequired,
  showAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  review: state.review,
});

export default connect(mapStateToProps, {
  searchGamesByCategory,
  showAllReviews,
})(GamesByCategory);
