import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const AddGame = () => {
  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <h5 className="text-center">Add Game</h5>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Game Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" sm={2} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Form.Group controlId="displayPic">
          <Form.Label>Display Pic</Form.Label>
          <Form.Control type="text" placeholder="Enter url" />
        </Form.Group>
        <Form.Group controlId="trailerLink">
          <Form.Label>Trailer Link</Form.Label>
          <Form.Control type="text" placeholder="Enter url" />
        </Form.Group>
        <Form.Group controlId="category">
          <Row>
            <Col className="mb-4">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter category" />
            </Col>
            <Col className="mt-4">
              <div className="mb-2"></div>
              <Button variant="secondary">Add Category</Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="platform">
          <Row>
            <Col className="mb-4">
              <Form.Label>Platform</Form.Label>
              <Form.Control type="text" placeholder="Enter platform" />
            </Col>
            <Col className="mt-4">
              <div className="mb-2"></div>
              <Button variant="secondary">Add Platform</Button>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="success" type="submit" block>
          Add Game
        </Button>
      </Form>
    </div>
  );
};

export default AddGame;
