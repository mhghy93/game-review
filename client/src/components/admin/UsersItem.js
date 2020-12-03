import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

const UsersItem = ({ user }) => {
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
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </Fragment>
  );
};

UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
