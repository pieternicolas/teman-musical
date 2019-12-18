import React, { FC, Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import PageLoader from 'containers/PageLoader';
import DefaultLayoutRoute from 'containers/Layout';

const history = createBrowserHistory();

const Home: FC = React.lazy(() => import('pages/Home'));

const Root: FC = () => (
  <Router history={history}>
    <Suspense fallback={<PageLoader/>}>
      <Switch>
        <DefaultLayoutRoute path="/" component={Home}/>
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
