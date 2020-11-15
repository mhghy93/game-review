import React, { Fragment } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <Fragment>
      <div className="row justify-content-center px-5 pt-5 pb-5">
        <Card className="shadow bg-white rounded">
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Please enter a valid email.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  Minimum password length should be 6.
                </Form.Text>
              </Form.Group>
              <Button variant="success" type="submit" block>
                Log In
              </Button>
            </Form>
            <Button className="mt-3" variant="link" block>
              Don't have an account?
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
