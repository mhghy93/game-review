import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSidebar from './AdminSidebar';
import { adminLogout } from '../../actions/admin';

const AdminNavbar = ({ admin: { isAuthenticated }, adminLogout }) => {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <LinkContainer to="/admin">
          <Navbar.Brand>Admin Game Reviews</Navbar.Brand>
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
            {!isAuthenticated ? (
              <LinkContainer to="/admin/login">
                <Nav.Link eventKey={2}>Log In</Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link onClick={adminLogout} eventKey={2}>
                Logout
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
