import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminSidebar from '../layout/AdminSidebar';
import AdminNavbar from '../layout/AdminNavbar';
import AdminPrivateRoute from './AdminPrivateRoute';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import AddGame from '../games/AddGame';
import AdminShowGames from '../games/AdminShowGames';
import ShowUsers from '../admin/ShowUsers';
import EditGame from '../games/EditGame';
import NotFound from '../pages/NotFound';
import AdminGameDetail from '../games/AdminGameDetail';
import UserDetail from '../admin/UserDetail';
import ShowAlert from '../layout/ShowAlert';
import PaginatedAdminGames from '../pagination/PaginatedAdminGames';
import PaginatedUsers from '../pagination/PaginatedUsers';

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <div className="d-flex" id="wrapper">
        <AdminSidebar />
        <div id="page-content-wrapper">
          <AdminNavbar />
          <Container>
            <ShowAlert />
            <Switch>
              <Route exact path="/admin/login" component={AdminLogin} />
              <AdminPrivateRoute
                exact
                path="/admin"
                component={AdminDashboard}
              />
              <AdminPrivateRoute
                exact
                path="/admin/game/add"
                component={AddGame}
              />
              <AdminPrivateRoute
                exact
                path="/admin/show/games"
                component={AdminShowGames}
              />
              <AdminPrivateRoute
                exact
                path="/admin/view/games"
                component={PaginatedAdminGames}
              />
              <AdminPrivateRoute
                exact
                path="/admin/show/users"
                component={ShowUsers}
              />
              <AdminPrivateRoute
                exact
                path="/admin/view/users"
                component={PaginatedUsers}
              />
              <AdminPrivateRoute
                exact
                path="/admin/game/edit/:id"
                component={EditGame}
              />
              <AdminPrivateRoute
                exact
                path="/admin/game/:id"
                component={AdminGameDetail}
              />
              <AdminPrivateRoute
                exact
                path="/admin/show/user/:id"
                component={UserDetail}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AdminRoutes;
