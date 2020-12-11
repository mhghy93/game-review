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
import Register from '../auth/Register';
import GameDetail from '../games/GameDetail';
import AddReview from '../reviews/AddReview';

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
              <Route exact path="/register" component={Register} />
              <Route exact path="/game/:id" component={GameDetail} />
              <UserPrivateRoute
                exact
                path="/user/profile"
                component={UserProfile}
              />
              <UserPrivateRoute
                exact
                path="/game/review/:gameId/add"
                component={AddReview}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Fragment>
    </BrowserRouter>
  );
};

export default UserRoutes;
