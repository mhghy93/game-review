import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../layout/NavigationBar';
import Home from '../pages/Home';
import Login from '../auth/Login';
import NotFound from '../pages/NotFound';

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <NavigationBar />
        <main className="mt-5">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Fragment>
    </BrowserRouter>
  );
};

export default UserRoutes;
