import React, { FC, ReactType } from 'react';
import { Route } from 'react-router-dom';

import Nav from 'containers/Nav';

interface DefaultLayoutProp {
  component: ReactType;
  path: string | string[];
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
