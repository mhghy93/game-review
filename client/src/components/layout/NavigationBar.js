import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { userLogout } from '../../actions/auth';
import {
  showAllGameCategories,
  showAllGamePlatforms,
} from '../../actions/game';
import CategoryDropdown from './CategoryDropdown';
import PlatformDropdown from './PlatformDropdown';
import SearchBar from '../search/SearchBar';

const NavigationBar = ({
  auth: { isUserAuthenticated },
  game: { categories, platforms },
  userLogout,
  showAllGameCategories,
  showAllGamePlatforms,
}) => {
  useEffect(() => {
    showAllGameCategories();
  }, [showAllGameCategories]);

  useEffect(() => {
    showAllGamePlatforms();
  }, [showAllGamePlatforms]);

  return (
    <Fragment>
      <Navbar
        className="shadow bg-white rounded"
        collapseOnSelect
        bg=""
        variant=""
        expand="lg"
        sticky="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand className="nav-link">
            <img
              src="https://res.cloudinary.com/mhghy93/image/upload/v1609007211/IGN_Logo_jgedc0.png"
              width="45"
              alt=""
              className="d-inline-block align-middle mr-2"
            />{' '}
            Game Reviews
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav nav-link">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav nav-link">
          <Navbar.Brand>
            <SearchBar />
          </Navbar.Brand>
          <Nav className="mr-auto nav-link">
            <CategoryDropdown categories={categories} />
            <PlatformDropdown platforms={platforms} />
          </Nav>

          <Nav className="nav-link">
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
    </Fragment>
  );
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  showAllGamePlatforms: PropTypes.func.isRequired,
  showAllGameCategories: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, {
  userLogout,
  showAllGameCategories,
  showAllGamePlatforms,
})(NavigationBar);
