import React, { FC } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

import Nav from 'containers/Nav';

interface DefaultLayoutProp extends RouteProps {
  component: FC<RouteComponentProps>;
};

const DefaultLayout: FC<DefaultLayoutProp> = ({
  component: Component,
  ...props
}) => {
  return (
    <Route {...props} render={matchProps => (
      <Nav>
        <Component {...matchProps}/>
      </Nav>
    )}/>
  );
};

export default DefaultLayout;
