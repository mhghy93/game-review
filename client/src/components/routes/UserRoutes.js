import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../layout/NavigationBar';
import UserPrivateRoute from './UserPrivateRoute';
import Home from '../pages/Home';
import Login from '../auth/Login';
import NotFound from '../pages/NotFound';
import UserProfile from '../profile/UserProfile';
import ShowAlert from '../layout/ShowAlert';

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <NavigationBar />
        <main className="mt-5">
          <Container>
            <ShowAlert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <UserPrivateRoute path="/user/profile" component={UserProfile} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Fragment>
    </BrowserRouter>
  );
};

export default UserRoutes;
