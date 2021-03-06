import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { adminLogout } from '../../actions/admin';

const AdminNavbar = ({ admin: { isAuthenticated }, adminLogout }) => {
  return (
    <Fragment>
      <Navbar
        className="shadow bg-white rounded"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <LinkContainer to="/admin">
          <Navbar.Brand className="nav-link">
            <img
              src="https://res.cloudinary.com/mhghy93/image/upload/v1609007211/IGN_Logo_jgedc0.png"
              width="45"
              alt=""
              className="d-inline-block align-middle mr-2"
            />{' '}
            Game Reviews Admin
          </Navbar.Brand>
          {/* <Navbar.Brand>
            {' '}
            <i className="fab fa-fantasy-flight-games"></i> Admin Game Reviews
          </Navbar.Brand> */}
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/admin/game/add">
              <Nav.Link>
                <i className="fas fa-plus-circle"></i> Add Game
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!isAuthenticated ? (
              <LinkContainer to="/admin/login">
                <Nav.Link eventKey={2}>
                  <i className="fas fa-sign-in-alt"></i> Log In
                </Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link onClick={adminLogout} eventKey={2}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

AdminNavbar.propTypes = {
  admin: PropTypes.object.isRequired,
  adminLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { adminLogout })(AdminNavbar);
