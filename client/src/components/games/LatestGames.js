import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { showLatestGames } from '../../actions/game';

const LatestGames = ({ game: { latestGames }, showLatestGames }) => {
  useEffect(() => {
    showLatestGames();
  }, [showLatestGames]);

  return (
    <Fragment>
      <h5 className="text-center mb-3"> Latest Games</h5>

      <Carousel>
        {latestGames.map((game) => (
          <LinkContainer key={game.id} to={`/game/${game.id}`}>
            <Carousel.Item className="carousel-items" interval={3000}>
              <img
                className="d-block w-100"
                src={game.displayPic}
                alt={game.title}
              />
            </Carousel.Item>
          </LinkContainer>
        ))}
      </Carousel>
    </Fragment>
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
