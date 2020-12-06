import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'react-bootstrap';
import { userLogin } from '../../actions/auth';
import ShowAlert from '../layout/ShowAlert';

const Login = ({ userLogin, auth: { isUserAuthenticated } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password);
  };

  if (isUserAuthenticated) {
    return <Redirect to="/user/profile" />;
  }

  return (
    <Fragment>
      <div className="row justify-content-center px-5 pt-5 pb-5">
        <Card className="shadow bg-white rounded">
          <Card.Body>
            {/* <ShowAlert /> */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <Form.Text className="text-muted">
                  Please enter a valid email.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                  minLength="6"
                />
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

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLogin })(Login);
