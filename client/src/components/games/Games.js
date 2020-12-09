import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GamesListItem from './GamesListItem';
import { showAllGames } from '../../actions/game';

const Games = ({ game: { games }, showAllGames }) => {
  useEffect(() => {
    showAllGames();
  }, [showAllGames]);

  return (
    <Fragment>
      <Row>
        {games.map((game) => (
          <GamesListItem key={game.id} game={game} />
        ))}
      </Row>
    </Fragment>
  );
};

Games.propTypes = {
  game: PropTypes.object.isRequired,
  showAllGames: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showAllGames })(Games);
