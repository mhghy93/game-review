import React, { useEffect, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersItem from './UsersItem';
import { showUsers } from '../../actions/admin';
import PageNumbers from '../pagination/PageNumbers';
import Loading from '../layout/Loading';

const ShowUsers = ({
  admin: { users, totalPages, currentPage, loading },
  showUsers,
}) => {
  useEffect(() => {
    showUsers();
  }, [showUsers]);

  const path = '/admin/view/users/?page=';

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-5">
          <h5 className="text-center mb-3">Users</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Created At</th>
                <th colSpan="3"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UsersItem key={user.id} user={user} />
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <PageNumbers
        totalPages={totalPages}
        type="lg"
        path={path}
        currentPage={Number(currentPage) + 1}
      />
    </Fragment>
  );
};

ShowUsers.propTypes = {
  admin: PropTypes.object.isRequired,
  showUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { showUsers })(ShowUsers);
