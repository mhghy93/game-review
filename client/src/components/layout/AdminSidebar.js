import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <Fragment>
      <div className="sidebar-heading">
        <i className="fas fa-tachometer-alt"></i> Dashboard
      </div>
      <div className="list-group list-group-flush">
        <Link
          to="/admin/game/add"
          className="list-group-item list-group-item-action bg-light"
        >
          <i className="fas fa-plus-circle"></i> Add Game
        </Link>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-gamepad"></i> Show all Games
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-users"></i> Show All Users
        </a>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
