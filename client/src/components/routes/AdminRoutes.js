import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminSidebar from '../layout/AdminSidebar';
import AdminNavbar from '../layout/AdminNavbar';
import AdminPrivateRoute from './AdminPrivateRoute';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <div class="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <AdminSidebar />
        </div>
        <div id="page-content-wrapper">
          <AdminNavbar />
          <Container>
            <Switch>
              <Route exact path="/admin/login" component={AdminLogin} />
              <AdminPrivateRoute
                exact
                path="/admin"
                component={AdminDashboard}
              />
            </Switch>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AdminRoutes;
