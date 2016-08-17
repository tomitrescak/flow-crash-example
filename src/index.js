// @flow
import { createApp } from 'apollo-mantra';

import initJss from './configs/jss';
import initContext from './configs/context';
import initAccounts from './configs/accounts';

import Loading from './modules/core/components/loading_view';
import client from './configs/apollo';
import initRouter from './configs/router';


// init context
const context = initContext();

// create app and prepare context that will be injected in all other components
createApp(context, { loadingComponent: Loading, apolloClient: client, store: context.Store });

// init app
initJss();
initAccounts();
initRouter(context);
