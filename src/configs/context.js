// @flow
import store from './store';
import { query, mutation } from 'apollo-mantra';
import { UiUtils, RouterUtils, ClassUtils } from '../helpers/helpers_client';
import * as ReduxBinding from '../helpers/redux_binding';

import { mutationWithFeedback, addInsertData, addModificationData } from '../helpers/apollo_helpers';
import gql from 'graphql-tag';

// put it in the global scope for now
global.gql = gql;

// import classnames from 'classnames';
// import beautify from "js-beautify";
// import StringUtils from "../../common/utils/string_utils";

export const Apollo = {
  query,
  mutation,
  mutationWithFeedback,
  addModificationData,
  addInsertData
};

const binder = ReduxBinding.createBinder(store);

export const Utils = {
  Ui: UiUtils,
  Router: RouterUtils,
  Class: ClassUtils,
  binding: binder
  //  Css: classnames,
  //  String: StringUtils,
  //  Beautify: beautify
};

export default function() {
  return {
    Store: store,
    Utils,
    Apollo
  };
}
