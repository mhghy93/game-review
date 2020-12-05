import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

const UserProfile = ({ auth: { user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return <div>hello {user.username}</div>;
};

UserProfile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(UserProfile);
