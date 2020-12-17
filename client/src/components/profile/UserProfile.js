import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { loadUser } from '../../actions/auth';

const UserProfile = ({ auth: { user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Fragment>
      <Card className="shadow bg-white rounded p-5">
        <Row>
          <Col xs={6} lg={4}>
            <Card.Img
              src="https://res.cloudinary.com/mhghy93/image/upload/v1578161259/blank-profile-picture-973460_1280_xf4t0m.png"
              variant="top"
            />
          </Col>
          <Col xs={6} lg={4}>
            <h5>{user.username}</h5>
            <Button variant="success">Edit Profile</Button>
            <p>Member since {new Date(user.createdAt).toLocaleDateString()}</p>
          </Col>
          <Col xs={6} lg={4}>
            Reviews
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

UserProfile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(UserProfile);
