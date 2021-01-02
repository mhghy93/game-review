import React, { Fragment, useEffect } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showGames } from '../../actions/game';
import Loading from '../layout/Loading';

const DashboardGameTable = ({
  game: { games, totalItems, loading },
  showGames,
}) => {
  useEffect(() => {
    showGames();
  }, [showGames]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-3">
          <Card.Body className="bg-success text-white">
            <h4>
              <i className="fas fa-gamepad"></i> Total Games {totalItems}
            </h4>
          </Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, index) => (
                <Fragment key={game.id}>
                  {index > 1 ? (
                    <Fragment></Fragment>
                  ) : (
                    <tr>
                      <td>{game.title}</td>
                      <td>{new Date(game.createdAt).toLocaleDateString()}</td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
          <LinkContainer to="/admin/show/games">
            <Button variant="link">More</Button>
          </LinkContainer>
        </div>
      )}
    </Fragment>
  );
};

DashboardGameTable.propTypes = {
  game: PropTypes.object.isRequired,
  showGames: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGames })(DashboardGameTable);
