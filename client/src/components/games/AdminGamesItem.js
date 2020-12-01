import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

const AdminGamesItem = ({ game }) => {
  return (
    <Fragment>
      <tr>
        <td>{game.id}</td>
        <td>{game.title}</td>
        <td>{game.category}</td>
        <td>{game.platform}</td>
        <td>{new Date(game.createdAt).toLocaleDateString()}</td>
        <td>
          <LinkContainer to={`/admin/game/${game.id}`}>
            <Button variant="info">Details</Button>
          </LinkContainer>
        </td>
        <td>
          <LinkContainer to={`/admin/game/edit/${game.id}`}>
            <Button variant="success">Edit</Button>
          </LinkContainer>
        </td>
        <td>
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </Fragment>
  );
};

AdminGamesItem.propTypes = {
  game: PropTypes.object.isRequired,
};

export default AdminGamesItem;
