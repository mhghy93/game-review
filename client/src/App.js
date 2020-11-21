import React, { Fragment, useEffect } from 'react';
import AdminRoutes from './components/routes/AdminRoutes';
import UserRoutes from './components/routes/UserRoutes';
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
    <Fragment>
      {pathname === '/admin' || pathname === '/admin/login' ? (
        <AdminRoutes />
      ) : (
        <UserRoutes />
      )}
    </Fragment>
  );
}

export default App;
