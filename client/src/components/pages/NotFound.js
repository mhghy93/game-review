import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div>
      <Container>
        <h1>Not found</h1>
        <p className="lead">The page you are looking for does not exist...</p>
      </Container>
    </div>
  );
};

export default NotFound;
