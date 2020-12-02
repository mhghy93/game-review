import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import DeleteGame from './DeleteGame';

const AdminGamesItem = ({ game }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleDeleteModal = () => {
    setModalShow(false);
  };

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
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Delete
          </Button>
          <DeleteGame
            id={game.id}
            show={modalShow}
            onHide={handleDeleteModal}
          />
        </td>
      </tr>
    </Fragment>
  );
};

AdminGamesItem.propTypes = {
  game: PropTypes.object.isRequired,
};

export default AdminGamesItem;
