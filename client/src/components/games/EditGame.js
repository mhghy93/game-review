import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { showGameDetail } from '../../actions/game';
import { LinkContainer } from 'react-router-bootstrap';

const EditGame = ({ showGameDetail, game: { game }, match }) => {
  useEffect(() => {
    showGameDetail(match.params.id);
  }, [showGameDetail, match.params.id]);

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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     addGame({
  //       title,
  //       description,
  //       displayPic,
  //       trailerLink,
  //       category,
  //       platform,
  //     });
  //     setFormData({
  //       title: '',
  //       description: '',
  //       displayPic: '',
  //       trailerLink: '',
  //       category: '',
  //       platform: '',
  //     });
  //   };

  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <h5 className="text-center">Edit Game</h5>
      <LinkContainer to="/admin/show/games">
        <Button className="mb-3" variant="light">
          Back
        </Button>
      </LinkContainer>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Game Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            sm={2}
            name="title"
            value={game.title || ''}
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
            value={game.description || ''}
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
            value={game.displayPic || ''}
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
            value={game.trailerLink || ''}
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
            value={game.category || ''}
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
            value={game.platform || ''}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Update
        </Button>
      </Form>
    </div>
  );
};

EditGame.propTypes = {
  showGameDetail: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { showGameDetail })(EditGame);
