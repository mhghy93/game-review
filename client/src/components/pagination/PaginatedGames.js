import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from '../games/GamesListItem';
import { showGames } from '../../actions/game';
import { showAllReviews } from '../../actions/review';
import LatestGames from '../games/LatestGames';
import PageNumbers from './PageNumbers';
import Loading from '../layout/Loading';

const Games = ({
  location,
  game: { games, totalPages, currentPage, loading },
  review: { allReviews },
  showGames,
  showAllReviews,
}) => {
  useEffect(() => {
    showGames(location.search);
  }, [showGames, location.search]);

  useEffect(() => {
    showAllReviews();
  }, [showAllReviews]);

  const path = '/games/?page=';

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <LatestGames />
          {games.length > 0 ? (
            <Row className="mt-5">
              {games.map((game) => (
                <GamesListItem
                  key={game.id}
                  game={game}
                  allReviews={allReviews}
                />
              ))}
            </Row>
          ) : (
            <p className="lead mt-5 text-center">No Games Found</p>
          )}
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
