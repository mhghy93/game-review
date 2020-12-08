import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { userLogout } from '../../actions/auth';

const NavigationBar = ({ auth: { isUserAuthenticated }, userLogout }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          {' '}
          <i className="fab fa-fantasy-flight-games"></i> Game Reviews
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {!isUserAuthenticated ? (
            <Fragment>
              <LinkContainer to="/register">
                <Nav.Link>
                  {' '}
                  <i className="fas fa-user-plus"></i> Register
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link eventKey={2}>
                  <i className="fas fa-sign-in-alt"></i> Log In
                </Nav.Link>
              </LinkContainer>
            </Fragment>
          ) : (
            <Fragment>
              <LinkContainer to="/user/profile">
                <Nav.Link>
                  {' '}
                  <i className="fas fa-user"></i> Profile
                </Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={userLogout} eventKey={2}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </Nav.Link>
            </Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  userLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLogout })(NavigationBar);
