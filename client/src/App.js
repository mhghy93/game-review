import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
