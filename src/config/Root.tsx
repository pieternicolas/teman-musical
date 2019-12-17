import React, { FC, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import PageLoader from 'containers/PageLoader';
import Nav from 'containers/Nav';

const history = createBrowserHistory();

const Home: FC = React.lazy(() => import('pages/Home'));

const Root: FC = () => (
  <Router history={history}>
    <Suspense fallback={<PageLoader/>}>
      <Nav>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Nav>
    </Suspense>
  </Router>
);

export default Root;
