// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { getRootNode } from '../helpers/routing_helpers';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo';
import AppRoutes from '../modules/routes'; 

import type { Context } from 'Cs';

export default function ({Store}: Context) {
  const history = syncHistoryWithStore(browserHistory, Store);

  const renderApp = (CurrentAppRoutes: any) => {
    ReactDOM.render(
        <ApolloProvider store={Store} client={apolloClient}>
          <CurrentAppRoutes history={history} />
        </ApolloProvider>,
      getRootNode('react-root')
    );
  };

  renderApp(AppRoutes);
};
