import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addGame } from '../../actions/game';

const AddGame = ({ addGame }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    displayPic: '',
    trailerLink: '',
    category: '',
    platform: '',
  });

  const {
    title,
    description,
    displayPic,
    trailerLink,
    category,
    platform,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame({
      title,
      description,
      displayPic,
      trailerLink,
      category,
      platform,
    });
    setFormData({
      title: '',
      description: '',
      displayPic: '',
      trailerLink: '',
      category: '',
      platform: '',
    });
  };

  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Game Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            sm={2}
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="displayPic">
          <Form.Label>Display Pic</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            name="displayPic"
            value={displayPic}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="trailerLink">
          <Form.Label>Trailer Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            name="trailerLink"
            value={trailerLink}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="platform">
          <Form.Label>Platform</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter platform"
            name="platform"
            value={platform}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Add Game
        </Button>
      </Form>
    </div>
  );
};

AddGame.propTypes = {
  addGame: PropTypes.func.isRequired,
};

export default connect(null, { addGame })(AddGame);
