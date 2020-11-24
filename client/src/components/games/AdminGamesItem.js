import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AdminGamesItem = ({ game }) => {
  return (
    <Fragment>
      <tr>
        <td>{game.id}</td>
        <td>{game.title}</td>
        <td>{game.category}</td>
        <td>{game.platform}</td>
        <td>
          <Button variant="info">Details</Button>
        </td>
        <td>
          <Button variant="success">Edit</Button>
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
