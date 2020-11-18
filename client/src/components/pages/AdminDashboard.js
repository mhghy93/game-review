import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAdmin } from '../../actions/admin';

const AdminDashboard = ({ loadAdmin, admin }) => {
  useEffect(() => {
    loadAdmin();
  }, []);

  return (
    <Fragment>
      <h1>Admin Dashboard </h1>
      <p>Hello {admin.adminUser.username}</p>
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  loadAdmin: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { loadAdmin })(AdminDashboard);
