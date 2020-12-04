import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import DeleteUser from './DeleteUser';

const UsersItem = ({ user }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleDeleteModal = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
        <td>
          <LinkContainer to={`/admin/show/user/${user.id}`}>
            <Button variant="info">Details</Button>
          </LinkContainer>
        </td>
        <td>
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Delete
          </Button>
          <DeleteUser
            id={user.id}
            show={modalShow}
            onHide={handleDeleteModal}
          />
        </td>
      </tr>
    </Fragment>
  );
};

UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
