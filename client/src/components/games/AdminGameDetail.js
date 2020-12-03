import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Badge, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { showGameDetail } from '../../actions/game';

const AdminGameDetail = ({ showGameDetail, game: { game }, match }) => {
  useEffect(() => {
    showGameDetail(match.params.id);
  }, [showGameDetail, match.params.id]);

  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <LinkContainer to="/admin/show/games">
        <Button variant="light">Back</Button>
      </LinkContainer>
      <h3 className="text-center mb-3">{game.title}</h3>
      <p className="mt-3 text-muted">
        Created On {new Date(game.createdAt).toLocaleDateString()}
      </p>
      <Image src={game.displayPic} thumbnail />
      <p className="mt-3">{game.description}</p>

      <a href={game.trailerLink} target="_blank">
        <Badge className="p-3 mr-3" variant="warning" pill>
          Trailer
        </Badge>
      </a>
      <Badge className="p-3" variant="danger" pill>
        {game.category}
      </Badge>
      <Badge className="p-3 ml-3" variant="success" pill>
        {game.platform}
      </Badge>
    </div>
  );
};

AdminGameDetail.propTypes = {
  showGameDetail: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGameDetail })(AdminGameDetail);
