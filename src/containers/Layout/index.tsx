import React, { FC } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

import Nav from 'containers/Nav';
import Footer from 'containers/Footer';

interface DefaultLayoutProp extends RouteProps {
  component: FC<RouteComponentProps>;
};

const DefaultLayout: FC<DefaultLayoutProp> = ({
  component: Component,
  ...props
}) => {
  return (
    <Route {...props} render={matchProps => (
      <>
        <Nav>
          <Component {...matchProps}/>
        </Nav>

        <Footer/>
      </>
    )}/>
  );
};

export default DefaultLayout;
