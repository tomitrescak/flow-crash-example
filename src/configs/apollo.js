// @flow
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import ls from 'local-storage';

// import { addTypenameToSelectionSet } from 'apollo-client/queries/queryTransform';

const defaultNetworkInterfaceConfig = {
  path: '/graphql',
  options: {},
  useAccounts: true
};

declare class Headers {
  Authorization: string;
}

export const createMeteorNetworkInterface = (givenConfig?: any = {}) => {
  const config = Object.assign(defaultNetworkInterfaceConfig, givenConfig);

  // absoluteUrl adds a '/', so let's remove it first
  let path = config.path;
  if (path[0] === '/') {
    path = path.slice(1);
  }

  // For SSR
  const url = path;
  const networkInterface = createNetworkInterface(url);

  if (config.useMeteorAccounts) {
    networkInterface.use([{
      applyMiddleware(request: any, next) {
        const currentUserToken = ls.get('__user_token');

        if (!currentUserToken) {
          next();
          return;
        }

        if (!request.options.headers) {
          request.options.headers = new Headers();
        }

        request.options.headers.Authorization = currentUserToken;

        next();
      },
    }]);
  }

  return networkInterface;
};

export const clientConfig = (networkInterfaceConfig: any) => {
  return {
    networkInterface: createMeteorNetworkInterface(networkInterfaceConfig),
    // queryTransformer: addTypenameToSelectionSet,

    // // Default to using Mongo _id, must use _id for queries.
    // dataIdFromObject: (result: any) => {
    //   if (result._id && result.__typename) {
    //     const dataId = result.__typename + result._id;
    //     return dataId;
    //   }
    // },
  };
};


export const client = new ApolloClient(clientConfig());

export default client;
