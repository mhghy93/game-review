import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminGamesItem from './AdminGamesItem';
import { showAllGames } from '../../actions/game';

const AdminShowGames = ({ showAllGames, game: { games } }) => {
  useEffect(() => {
    showAllGames();
  }, [showAllGames]);

  return (
    <div className="mt-5">
      <h5 className="text-center mb-3">Games</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Platform</th>
            <th>Created At</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <AdminGamesItem key={game.id} game={game} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

AdminShowGames.propTypes = {
  showAllGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showAllGames })(AdminShowGames);
