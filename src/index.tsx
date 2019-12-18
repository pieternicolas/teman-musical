import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Root from 'config/Root';

import theme from 'assets/theme';
import 'assets/styles/index.scss';

import * as serviceWorker from './serviceWorker';

const render = (Component: FC) => {
  ReactDOM.render(
    <>
      <Helmet>
        <title>Teman Musicals</title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </>,
    document.getElementById('root')
  );
};

render(Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
