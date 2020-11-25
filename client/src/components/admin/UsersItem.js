import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UsersItem = ({ user }) => {
  return (
    <Fragment>
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
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

UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
