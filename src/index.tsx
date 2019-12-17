import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Root from 'config/Root';

import 'assets/styles/index.css';

import * as serviceWorker from './serviceWorker';

const render = (Component: FC) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
};

render(Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
