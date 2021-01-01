import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { loadAdmin } from '../../actions/admin';
import Loading from '../layout/Loading';
import DashboardUserTable from '../admin/DashboardUserTable';
import DashboardGameTable from '../admin/DashboardGameTable';

const AdminDashboard = ({ loadAdmin, admin: { adminUser, loading } }) => {
  useEffect(() => {
    loadAdmin();
  }, [loadAdmin]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-5">
          <h3>Dashboard</h3>
          <Row>
            <Col lg={3} sm={6}>
              <Card.Img
                src="https://res.cloudinary.com/mhghy93/image/upload/v1578161259/blank-profile-picture-973460_1280_xf4t0m.png"
                variant="top"
              />
              <h5 className="mt-3">{adminUser.username}</h5>
            </Col>
            <Col lg={3} sm={6}>
              <LinkContainer to="/admin/game/add">
                <Card.Body className="bg-info text-white mb-2">
                  <h4>
                    <i className="fas fa-plus-circle"></i> Add Game
                  </h4>
                </Card.Body>
              </LinkContainer>
            </Col>
            <Col lg={3} sm={6}>
              <LinkContainer to="/admin/show/games">
                <Card.Body className="bg-success text-white mb-2">
                  <h4>
                    <i className="fas fa-gamepad"></i> View Games
                  </h4>
                </Card.Body>
              </LinkContainer>
            </Col>
            <Col lg={3} sm={6}>
              <LinkContainer to="/admin/show/users">
                <Card.Body className="bg-warning mb-2">
                  <h4>
                    <i className="fas fa-users"></i> View Users
                  </h4>
                </Card.Body>
              </LinkContainer>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col lg={6}>
              <DashboardGameTable />
            </Col>
            <Col lg={6}>
              <DashboardUserTable />
            </Col>
          </Row>
        </div>
      )}
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
