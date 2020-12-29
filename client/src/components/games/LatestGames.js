import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { showLatestGames } from '../../actions/game';

const LatestGames = ({ game: { latestGames }, showLatestGames }) => {
  useEffect(() => {
    showLatestGames();
  }, [showLatestGames]);

  return (
    <Carousel>
      {latestGames.map((game) => (
        <Carousel.Item className="carousel-items" interval={3000} key={game.id}>
          <img
            className="d-block w-100"
            src={game.displayPic}
            alt={game.title}
          />
          <Carousel.Caption>
            <h3>Latest Games</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

LatestGames.propTypes = {
  game: PropTypes.object.isRequired,
  showLatestGames: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showLatestGames })(LatestGames);
