import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AddReview = ({ match }) => {
  return (
    <Fragment>
      <LinkContainer to="/">
        <Button variant="light">Back</Button>
      </LinkContainer>
      <Form className="mt-3">
        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows={6} name="review" required />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rate</Form.Label>
          <Form.Check type="radio" label="1" name="rating" id="rating1" />
          <Form.Check type="radio" label="2" name="rating" id="rating2" />
          <Form.Check type="radio" label="3" name="rating" id="rating3" />
          <Form.Check type="radio" label="4" name="rating" id="rating4" />
          <Form.Check type="radio" label="5" name="rating" id="rating5" />
        </Form.Group>
        <Button variant="warning" type="submit" block>
          <i className="fas fa-plus"></i> Add Review
        </Button>
      </Form>
    </Fragment>
  );
};

export default AddReview;
