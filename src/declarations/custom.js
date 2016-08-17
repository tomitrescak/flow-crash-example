import { Component } from 'react';

// ///////////////////////////////////////////////////////////////
// // Node.js                                                   //
// ///////////////////////////////////////////////////////////////

// declare var global: any;
// declare var module: any;
// declare function require(mod: string): any;
// declare var process: any;

///////////////////////////////////////////////////////////////
// react-router                                  //
///////////////////////////////////////////////////////////////

declare module 'react-router' {
  declare var browserHistory: any;
}

// ///////////////////////////////////////////////////////////////
// // react-dom                                                 //
// ///////////////////////////////////////////////////////////////

// declare module 'react-dom' {
//   declare function render(...params: any[]): any;
// }

///////////////////////////////////////////////////////////////
// react-router-redux                                        //
///////////////////////////////////////////////////////////////

declare module 'react-router-redux' {
  declare function syncHistoryWithStore(history: any, store: any): any;
  declare function push(route: string): void;
  declare var routerReducer: any;
  declare var routerMiddleware: any;
}


// ///////////////////////////////////////////////////////////////
// // react-mounter                                             //
// ///////////////////////////////////////////////////////////////

// declare module 'react-mounter' {
//   declare var mount: any;
//   declare var withOptions: any;
// }

// ///////////////////////////////////////////////////////////////
// // mantra                                                    //
// ///////////////////////////////////////////////////////////////

// interface IKomposer {
//   (params: Object, onData: Function): Function;
// }

// interface IKomposerData<T> {
//   (error?: Object, data?: T): void;
// }

// interface IInjectDeps {
//   (...deps: any[]): IInjectDeps;
// }

// interface IDepsMapper {
//   (...deps: any[]): void;
// }

// declare module 'mantra-core' {

//   declare var injectDeps: IInjectDeps;
//   declare function useDeps(depsMapper?: IDepsMapper): any;
//   declare function createApp(context: any): any;

//   declare function compose(komposer: IKomposer, loadingComponent?: any, bim?: any, opts?: { pure: Boolean }): any;
//   declare function composeWithTracker(komposer: IKomposer, loadingComponent?: any, bim?: any, opts?: { pure: Boolean }): any;
//   declare function composeWithPromise(): any;
//   declare function composeWithObservable(): any;
//   declare function composeAll<V>(...composeFunctions: Function[]):
//     (component: any, loadingComponent?: any) => () => Component<V, {}>;
// }

// ///////////////////////////////////////////////////////////////
// // storybook                                                 //
// ///////////////////////////////////////////////////////////////

// declare module '@kadira/storybook' {
//   declare var storiesOf: any;
//   declare var action: any;
// }

// ///////////////////////////////////////////////////////////////
// // react-hot-loader                                          //
// ///////////////////////////////////////////////////////////////

// declare module 'react-hot-loader' {
//   declare var AppContainer: any;
// }


///////////////////////////////////////////////////////////////
// apollo                                                    //
///////////////////////////////////////////////////////////////

interface ApolloClient {
  (config: any): any;
}

declare module 'apollo-client' {
  declare var Document: any;
  declare var GraphQLResult: any;
  declare var SelectionSet: any;
  declare var GraphQLError: any;
  declare var ApolloClient: any;
  declare var createNetworkInterface: any;

  declare var exports: ApolloClient;
}

// // declare var gql: any;

declare module 'react-apollo' {
  declare var ApolloProvider: any;
  declare var connect: any;
}

// declare module 'graphql-tools' {
//   declare var apolloServer: any;
// }

// // declare module 'express' {
// //   let express: any;
// //   declare default express;
// // }

// // declare module 'http-proxy-middleware' {
// //   let proxyMiddleware: any;
// //   declare default proxyMiddleware;
// // }

// // declare module 'redux-thunk' {
// //   let thunk: any;
// //   declare default thunk;
// // }

// // declare module 'redux-logger' {
// //   let logger: any;
// //   declare default logger;
// // }

// ///////////////////////////////////////////////////////////////
// // jss                                                       //
// ///////////////////////////////////////////////////////////////

interface EmptyFunction {
  (): void;
}

declare module 'jss' {
  declare interface JssStylesheet {
    attach(): { classes: any };
  }
  declare interface IJss {
    use(plugin: any): void;
    createStyleSheet(sheet: any): JssStylesheet;

  }
  declare var exports: IJss;
}

declare module 'jss-nested' {
  declare var exports: EmptyFunction;
}

declare module 'jss-vendor-prefixer' {
  declare var exports: EmptyFunction;
}

// ///////////////////////////////////////////////////////////////
// // meteor packages                                           //
// ///////////////////////////////////////////////////////////////

// declare module 'meteor/didstopia:admzip' {
//   declare var extractZip: any;
// }

///////////////////////////////////////////////////////////////
// react-s-alert                                             //
///////////////////////////////////////////////////////////////


/* eslint-disable */
declare module 'react-s-alert' {
  declare class SAlertStatic extends Component {
    static success(message: string, options?: Object): void;
    static info(message: string, options?: Object): void;
    static error(message: string, options?: Object): void;
    static config(config: Object): void;
  }

  // let Alert: SAlertStatic;
  declare var exports: typeof SAlertStatic;
}
/* eslint-enable */


// // ///////////////////////////////////////////////////////////////
// // // i18n-client                                               //
// // ///////////////////////////////////////////////////////////////

// // interface I18n {
// //   languages: Object;
// //   currentLanguage: string;
// //   add(language: string, strings: Object): void;
// //   initTranslator(prefix: string): void;
// //   translate(key: string, args?: any): string;
// // }

// // declare module 'i18n-client' {
// //   declare var i18n: I18n;
// //   declare function __(key: string, args?: any): string;
// // }

// // ///////////////////////////////////////////////////////////////
// // // meteor/tomi:accountsui-semanticui-redux                   //
// // ///////////////////////////////////////////////////////////////

// // declare module 'meteor/tomi:accountsui-semanticui-redux' {
// //   declare class AccountsView extends __Component<{}, {}> { }
// //   declare class UserView extends __Component<{}, {}> { }
// //   declare function reducer(state: any, action: any): any;

// //   declare interface AccountsUiUser {
// //     _id: string;
// //     profile: any;
// //     roles: string[];
// //     isRole(role: string | string[]): boolean;
// //     isAdmin(): boolean;
// //   }

// //   interface IState<T extends AccountsUiUser> {
// //     view?: string;
// //     error?: string;
// //     info?: string;
// //     token?: string;
// //     user?: T;
// //     userId?: string;
// //     loggingIn?: boolean;
// //   }
// // }

///////////////////////////////////////////////////////////////
// marked                                                    //
///////////////////////////////////////////////////////////////

declare module 'marked' {
  declare var exports : any;
}

// // ///////////////////////////////////////////////////////////////
// // // moment                                                    //
// // ///////////////////////////////////////////////////////////////

// // declare module 'moment' {
// //   declare var moment: Function;
// //   declare default moment;
// // }

// // ///////////////////////////////////////////////////////////////
// // // pickadate                                                 //
// // ///////////////////////////////////////////////////////////////

// // declare interface JQuery {
// //   pickadate(props: any): void;
// // }

// // ///////////////////////////////////////////////////////////////
// // // meteor extras                                             //
// // ///////////////////////////////////////////////////////////////

// // declare module 'meteor/meteor' {
// //   declare module Meteor {
// //     interface AsyncCallback { (error: Meteor.Error, result: any): void }
// //   }
// // }

// // ///////////////////////////////////////////////////////////////
// // // semantic ui                                               //
// // ///////////////////////////////////////////////////////////////

// // interface JQuery {
// //   form(formDefinition: any, options: any): any;
// //   dropdown(...params: any[]): void;
// //   transition(name: string, duration: number, callback?: () => void): any;
// //   sticky(options: any): any;
// //   search(options: Object): any;
// //   modal(text: any): JQuery;
// //   tab(): any;
// //   checkbox(): any;
// //   popup(): any;
// //   sidebar(...params: any[]): any;
// // }

// // interface JQueryStatic {
// //   semanticUiGrowl(text: string, params?: Object): any;
// // }

///////////////////////////////////////////////////////////////
// Sweet alert                                               //
///////////////////////////////////////////////////////////////

declare module 'sweetalert' {
  declare function swal(...any: any[]): Promise<any>;
  declare var exports : typeof swal;
}

declare module 'sweetalert2' {
  declare function swal(...any: any[]): Promise<any>;
  declare var exports : typeof swal;
}

// // ///////////////////////////////////////////////////////////////
// // // jsx-control-statements                                    //
// // ///////////////////////////////////////////////////////////////

// // declare function If(condition: any): any;
// // declare function For(each: string, index: string, of: any): any;
// // declare var Else: any;
// // declare function Choose(): any;
// // declare function When(condition: any): any;
// // declare function Otherwise(): any;

// // ///////////////////////////////////////////////////////////////
// // // eventobject                                               //
// // ///////////////////////////////////////////////////////////////
// // declare interface IEventObject {
// //   on(listener: Function, executeImmediatelly?: boolean): void;
// //   off(listener: Function): void;
// //   attachListener(listener: Function): void;
// //   detachListener(listener: Function): void;
// //   reset(): void;
// //   emit(...args: any[]): void;
// // }

// // declare module 'eventobject' {
// //   declare default class Event {
// //     on(listener: Function, executeImmediatelly?: boolean): void;
// //     off(listener: Function): void;
// //     attachListener(listener: Function): void;
// //     detachListener(listener: Function): void;
// //     reset(): void;
// //     emit(...args: any[]): void;
// //   }
// // }

// // ///////////////////////////////////////////////////////////////
// // // roles                                                     //
// // ///////////////////////////////////////////////////////////////

// // declare module 'meteor/alanning:roles' {
// //   import { Mongo } from 'meteor/mongo';

// //   interface RolesDAO {
// //     _id?: string;
// //     name?: string;
// //   }

// //   declare module Roles {
// //     declare function createRole(roleName: string): string;
// //     declare function deleteRole(roleName: string): void;
// //     declare function addUsersToRoles(users: any, roles: any): void;
// //     declare function removeUsersFromRoles(users: any, roles: any): void;
// //     declare function userIsInRole(user: any, roles: any): boolean;  // user can be user ID or user object
// //     declare function getRolesForUser(userId: string): string[];
// //     declare function getAllRoles(): Mongo.Cursor<RolesDAO>;
// //     declare function getUsersInRole(roleName: string): Mongo.Cursor<RolesDAO>;
// //   }
// // }

// ///////////////////////////////////////////////////////////////
// // tomi:apollo-mantra                                        //
// ///////////////////////////////////////////////////////////////

// declare interface IApolloState {
//   queries: Object;
//   mutations: Object;
// }

// declare interface IApolloDefinition {
//   schema: string;
//   queries?: Object;
//   resolvers?: Object;
//   mutations?: Object;
//   queryText?: string;
//   mutationText?: string;
// }


// declare module 'meteor/tomi:apollo-mantra' {
//   declare function processSchema(definition: IApolloDefinition[]): void;
//   declare function schemas(): any;
//   declare function resolvers(): any;
//   declare function ioSchema(type: string): void;
//   declare function modificationSchema(): string;
// }

// declare module 'apollo-mantra/server' {
//   declare function processSchema(definition: IApolloDefinition[]): void;
//   declare function schemas(): any;
//   declare function resolvers(): any;
//   declare function ioSchema(type: string): void;
//   declare function modificationSchema(): string;
// }


declare module 'apollo-mantra' {
  declare interface IConnectFunctions {
    initContainer?: Function;
    mapStateToProps?: Function;
    mapDispatchToProps?: Function;
    mapQueriesToProps?: Function;
    mapMutationsToProps?: Function;
  }

  declare interface IQuery {
    query: string;
    variables?: Object;
    optimisticCallback?: (dispatch: Function, state: () => any) => void;
    thenCallback?: (data: any, dispatch: Function, state: () => any) => void;
    errorCallback?: (errors: any, dispatch: Function, state: () => any) => void;
    catchCallback?: (error: any, dispatch: Function, state: () => any) => void;
    finalCallback?: (dispatch: Function, state: () => any) => void;
  }

  declare interface IResult<T> {
    type: string;
    result: {
      data: T
    }
  }

  declare interface IMutationResult<T> extends IResult<T> {
    mutationId: string;
  }

  declare interface IQueryResult<T> extends IResult<T> {
    queryId: string;
    requestId: number;
  }

  declare interface IOptions {
    loadingComponent?: any;
    apolloClient?: any;
    store: any;
  }

  declare function query(query: IQuery): void;
  declare function mutation(query: IQuery): void;
  declare function createApp(context: any, options: IOptions): any;
  declare function composeAll<V>(...composeFunctions: Function[]):
    (component: any, loadingComponent?: any) => () => Component<V, {}>;
  declare function compose<T>(funcs: IConnectFunctions): (component: any) => Component<T>;
  declare function connect<T>(funcs: IConnectFunctions): (component: any) => Component<T>;
  declare function loaderContainer(component: any, mapProps?: (context: any, ownProps: any) => void): any;
  declare function loadingContainer(component: Component, lodingOrKeys?: any, keys?: string[]): any;
  declare function copyQuery(state: Object, stateKey: string, queryResult: Object[], queryKey?: string, overwrite?: boolean): Object;
  declare function isQuery(action: any, queryName: string): boolean;
  declare function getQuery<T>(action: any): string;
  declare function isMutation(action: any, queryName: string): boolean;
  declare function getMutation<T>(action: any): string;
  declare function queriesFinished(state: any): boolean;
}

declare module 'graphql-tag' {
  declare var gql: any;
  declare var exports: any;
}

// // ///////////////////////////////////////////////////////////////
// // // apollo-mantra                                             //
// // ///////////////////////////////////////////////////////////////

// // declare interface IReduxAction {
// //   type: string;
// // }

///////////////////////////////////////////////////////////////
// react-addons-update                                       //
///////////////////////////////////////////////////////////////

declare module 'react-addons-update' {
  declare function update(obj: Object, query: Object): Object;
  declare var exports : typeof update;
}

// // ///////////////////////////////////////////////////////////////
// // // java2js                                                   //
// // ///////////////////////////////////////////////////////////////

// // declare module java2jscompiler {
// //   interface Map<T> {
// //     [index: string]: T;
// //   }

// //   interface IFile {
// //     name: string;
// //     source: string;
// //   }

// //   interface ICompiledFile {
// //     version?: number;
// //     name?: string;
// //     source?: string;
// //     result?: string;
// //   }

// //   interface IMessage {
// //     file?: string;
// //     line: number;
// //     column: number;
// //     message: string;
// //   }

// //   interface IDoubleCompilationResult {
// //     ts?: Map<ICompiledFile>;
// //     js?: Map<ICompiledFile>;
// //     errors: IMessage[];
// //     warnings: IMessage[];
// //   }

// //   interface IAsyncCompilationResult {
// //     files: Map<ICompiledFile>;
// //     warnings: Map<IMessage[]>;
// //     errors: Map<IMessage[]>;
// //   }
// // }

// // declare var java2js: {
// //   initService(files: java2jscompiler.IFile[]): void;
// //   compile(file: java2jscompiler.IFile, parseOnly?: boolean): java2jscompiler.IDoubleCompilationResult
// //   compileAsync(files: java2jscompiler.IFile[], cb: (result: java2jscompiler.IAsyncCompilationResult) => void, timeout?: number): void;
// // };

// // ///////////////////////////////////////////////////////////////
// // // ace                                                       //
// // ///////////////////////////////////////////////////////////////

// // declare module 'brace' {
// //   let exp: any;
// //   declare default exp;
// // }

// // declare module 'react-ace' {
// //   let exp: any;
// //   declare default exp;
// // }

// // ///////////////////////////////////////////////////////////////
// // // Kinetic.JS                                                //
// // ///////////////////////////////////////////////////////////////

// // declare var Kinetic: any;


// // declare module 'react-functional' {
// //   interface ILifeCycle<T> {
// //     componentWillMount?(props: T): any;
// //     componentDidMount?(props: T, refs: any): any;
// //     componentWillReceiveProps?(props: T, nextProps: T, refs: any): any
// //     shouldComponentUpdate?(props: T, nextProps: T, refs: any): any
// //     componentWillUpdate?(props: T, nextProps: T, refs: any): any
// //     componentDidUpdate?(props: T, prevProps: T, refs: any): any
// //     componentWillUnmount?(props: T, refs: any): any
// //   }
// //   declare default function composer<T>(component: __React.StatelessComponent<any>, lifecycle: ILifeCycle<T>): void;
// // }

///////////////////////////////////////////////////////////////
// local storage                                             //
///////////////////////////////////////////////////////////////

interface ILs {
  get(key: string): any;
  set(key: string, val: any): void;
}

declare module 'local-storage' {
  declare var exports: ILs;
}

///////////////////////////////////////////////////////////////
// meteor-random                                             //
///////////////////////////////////////////////////////////////

interface MeteorRandom {
  id(length?: number): string;
  secret(length?: number): string;
  fraction(): number;
  choice<T>(array: T[]): T;
}

declare module 'meteor-random' {
  declare var Random: MeteorRandom;
}

///////////////////////////////////////////////////////////////
// react-helmet                                              //
///////////////////////////////////////////////////////////////

declare module 'react-helmet' {
  declare var exports: any;
}