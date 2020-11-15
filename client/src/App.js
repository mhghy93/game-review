import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
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
        <main className="mt-3">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
