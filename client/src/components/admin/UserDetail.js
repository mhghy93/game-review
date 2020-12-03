import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { showUserDetail, showUserReviews } from '../../actions/admin';

const UserDetail = ({
  admin: { user },
  showUserDetail,
  showUserReviews,
  match,
}) => {
  useEffect(() => {
    showUserDetail(match.params.id);
  }, [showUserDetail, match.params.id]);

  useEffect(() => {
    showUserReviews(match.params.id);
  }, [showUserReviews, match.params.id]);

  return (
    <div className="mt-3 mr-5 ml-5 mb-5">
      <LinkContainer to="/admin/show/users">
        <Button variant="light">Back</Button>
      </LinkContainer>
      <h5 className="text-center mb-5">User Details</h5>
      <Card className="shadow bg-white rounded">
        <Card.Body>
          <Row>
            <Col>
              <p className="font-weight-bold">First Name</p>
            </Col>
            <Col>
              <p className="font-weignt-light">{user.firstname}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="font-weight-bold">Last Name</p>
            </Col>
            <Col>
              <p className="font-weignt-light"> {user.lastname}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="font-weight-bold">Username</p>
            </Col>
            <Col>
              <p className="font-weignt-light"> {user.username}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="font-weight-bold">Email</p>
            </Col>
            <Col>
              <p className="font-weignt-light"> {user.email}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="font-weight-bold">Created At</p>
            </Col>
            <Col>
              <p className="font-weignt-light">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

UserDetail.propTypes = {
  admin: PropTypes.object.isRequired,
  showUserDetail: PropTypes.func.isRequired,
  showUserReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { showUserDetail, showUserReviews })(
  UserDetail
);
