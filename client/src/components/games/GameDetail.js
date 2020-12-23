import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { showGameDetail } from '../../actions/game';
import Reviews from '../reviews/Reviews';
import GamePlatform from './GamePlatform';
import GameCategory from './GameCategory';

const GameDetail = ({ showGameDetail, game: { game }, match }) => {
  useEffect(() => {
    showGameDetail(match.params.id);
  }, [showGameDetail, match.params.id]);

  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <LinkContainer to="/">
        <Button variant="light">Back</Button>
      </LinkContainer>
      <h3 className="text-center mb-3">{game.title}</h3>
      <Image src={game.displayPic} thumbnail />
      <div className="player-wrapper mt-3 mb-3">
        <ReactPlayer
          className="react-player"
          url={game.trailerLink}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <p className="mt-3">{game.description}</p>
      <GameCategory category={game.category} />
      <GamePlatform platform={game.platform} />
      <div className="mt-5">
        <LinkContainer to={`/game/review/${game.id}/add`}>
          <Button variant="warning">
            <i className="fas fa-plus"></i> Add Review
          </Button>
        </LinkContainer>
      </div>
      <Reviews id={match.params.id} />
    </div>
  );
};

GameDetail.propTypes = {
  showGameDetail: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGameDetail })(GameDetail);
