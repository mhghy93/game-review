import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminSidebar = ({ admin: { isAuthenticated } }) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          <div className="bg-white text-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </div>
            <div className="list-group list-group-flush">
              <Link
                to="/admin/game/add"
                className="list-group-item list-group-item-action bg-white text-dark"
              >
                <i className="fas fa-plus-circle"></i> Add Game
              </Link>
              <Link
                to="/admin/show/games"
                className="list-group-item list-group-item-action bg-white text-dark"
              >
                <i className="fas fa-gamepad"></i> Show all Games
              </Link>
              <Link
                to="/admin/show/users"
                className="list-group-item list-group-item-action bg-white text-dark"
              >
                <i className="fas fa-users"></i> Show All Users
              </Link>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

AdminSidebar.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps)(AdminSidebar);
