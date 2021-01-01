import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminGamesItem from '../games/AdminGamesItem';
import { showGames } from '../../actions/game';
import { Fragment } from 'react';
import Loading from '../layout/Loading';
import PageNumbers from './PageNumbers';

const PaginatedAdminGames = ({
  location,
  showGames,
  game: { games, loading, totalPages, currentPage },
}) => {
  useEffect(() => {
    showGames(location.search);
  }, [showGames, location.search]);

  const path = '/admin/view/games?page=';

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
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
      )}
      <PageNumbers
        totalPages={totalPages}
        type="lg"
        path={path}
        currentPage={Number(currentPage) + 1}
      />
    </Fragment>
  );
};

PaginatedAdminGames.propTypes = {
  showGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGames })(PaginatedAdminGames);
