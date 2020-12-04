import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { deleteUser } from '../../actions/admin';

const DeleteUser = ({ id, show, onHide, deleteUser }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    onHide();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(id);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this user?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCancel} variant="success">
          Cancel
        </Button>
        <Button onClick={handleDelete} variant="danger">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteUser.propTypes = {
  deleteUser: PropTypes.func.isRequired,
};

export default connect(null, { deleteUser })(DeleteUser);
