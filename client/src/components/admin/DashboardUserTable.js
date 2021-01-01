import React, { Fragment, useEffect } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showUsers } from '../../actions/admin';
import Loading from '../layout/Loading';

const DashboardUserTable = ({
  admin: { users, totalItems, loading },
  showUsers,
}) => {
  useEffect(() => {
    showUsers();
  }, [showUsers]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-3">
          <Card.Body className="bg-warning">
            <h4>
              <i className="fas fa-users"></i> Total Users {totalItems}
            </h4>
          </Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>UserName</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <Fragment key={user.id}>
                  {index > 1 ? (
                    <Fragment></Fragment>
                  ) : (
                    <tr>
                      <td>{user.username}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
          <LinkContainer to="/admin/show/users">
            <Button variant="link">More</Button>
          </LinkContainer>
        </div>
      )}
    </Fragment>
  );
};

DashboardUserTable.propTypes = {
  admin: PropTypes.object.isRequired,
  showUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { showUsers })(DashboardUserTable);
