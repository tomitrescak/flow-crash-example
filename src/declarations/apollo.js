// @flow
import { State } from 'Cs';

declare module 'Apollo' {
  declare type ApolloState = {
    queries: Object;
    mutations: Object;
  }

  declare type Query = {
    query: any,
    forceFetch?: boolean,
    pollInterval?: number;
    variables?: Object
  }

  declare type IGraphqlQuery = { [name: any]: Query; }

  declare type IGraphQlProps<T> = {
    state: State;
    ownProps: T;
  }

  declare interface IMutations<T> {
    mutations: T;
  }
}