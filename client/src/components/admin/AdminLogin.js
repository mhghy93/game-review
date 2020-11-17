import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'react-bootstrap';
import { adminLogin } from '../../actions/admin';

const AdminLogin = ({ adminLogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    adminLogin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  return (
    <Fragment>
      <div className="row justify-content-center px-5 pt-5 pb-5">
        <Card className="shadow bg-white rounded">
          <Card.Body>
            <Form onSubmit={onSubmit}>
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
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

AdminLogin.propTypes = {
  adminLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
