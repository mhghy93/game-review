import React, { Fragment, useEffect } from 'react';
import AdminRoutes from './components/routes/AdminRoutes';
import UserRoutes from './components/routes/UserRoutes';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import { loadAdmin } from './actions/admin';
import { loadUser } from './actions/auth';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const pathname = window.location.pathname;
  useEffect(() => {
    if (pathname.includes('/admin')) {
      store.dispatch(loadAdmin());
    } else {
      store.dispatch(loadUser());
    }
  }, [pathname]);

  return (
    <Fragment>
      {pathname.includes('/admin') ? <AdminRoutes /> : <UserRoutes />}
    </Fragment>
  );
}

export default App;
