import React, { Fragment } from 'react';

const AdminSidebar = () => {
  return (
    <Fragment>
      {/* <div class="sidebar-heading">Start Bootstrap </div> */}
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Dashboard
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Shortcuts
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Overview
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Events
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Profile
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Status
        </a>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
