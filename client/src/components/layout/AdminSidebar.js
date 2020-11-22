import React, { Fragment } from 'react';

const AdminSidebar = () => {
  return (
    <Fragment>
      <div className="sidebar-heading">
        <i class="fas fa-tachometer-alt"></i> Dashboard
      </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i class="fas fa-plus-circle"></i> Add Game
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i class="fas fa-gamepad"></i> Show all Games
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i class="fas fa-users"></i> Show All Users
        </a>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
