import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { setAlert } from '../../actions/alert';
import { userRegister } from '../../actions/auth';

const Register = ({
  auth: { isUserAuthenticated },
  userRegister,
  setAlert,
}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      userRegister({ firstname, lastname, username, email, password });
      return <Redirect to="/login" />;
    }
  };

  //   if (isUserAuthenticated) {
  //     return <Redirect to="/user/profile" />;
  //   }

  return (
    <Fragment>
      <Row className="justify-content-center px-5 pt-2 pb-5">
        <Col lg={8}>
          <LinkContainer to="/user/profile">
            <Button className="mb-3" variant="light">
              Back
            </Button>
          </LinkContainer>
          <Card className="shadow bg-white rounded">
            <div className="bg-secondary text-white">
              {' '}
              <h5 className="text-center mt-3">Edit Profile</h5>
            </div>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter firstname"
                    name="firstname"
                    value={firstname}
                    onChange={onChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    Please enter your firstname
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter lastname"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    Please enter your lastname
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={username}
                    onChange={onChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    Please enter your username
                  </Form.Text>
                </Form.Group>

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
                  </Form.Text>{' '}
                </Form.Group>

                <Button variant="success" type="submit" block>
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

Register.propTypes = {
  userRegister: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userRegister, setAlert })(Register);
