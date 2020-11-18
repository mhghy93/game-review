import React, { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import AdminNavbar from './components/layout/AdminNavbar';
import AdminPrivateRoute from './components/routes/AdminPrivateRoute';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import AdminLogin from './components/admin/AdminLogin';
import NotFound from './components/pages/NotFound';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import { loadAdmin } from './actions/admin';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const pathname = window.location.pathname;
  useEffect(() => {
    if (pathname === '/admin' || pathname === '/admin/login') {
      store.dispatch(loadAdmin());
    }
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        {pathname === '/admin' || pathname === '/admin/login' ? (
          <AdminNavbar />
        ) : (
          <NavigationBar />
        )}
        {/* <NavigationBar /> */}
        <main className="mt-5">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <AdminPrivateRoute
                exact
                path="/admin"
                component={AdminDashboard}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
