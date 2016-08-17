// @flow

import { ISolutionState } from '../../modules/solution/actions/solution_reducer';
import { IExerciseState } from '../../modules/exercise/actions/exercise_reducer';
import { IMarkingState } from '../../modules/marking/actions/marking_reducer';
import { IPracticalState } from '../../modules/practicals/practical_reducer';

import type { AccountsState } from 'Cs/Accounts';
import type { ApolloState } from 'Apollo';

import typeof { Utils as UtilsType, Apollo as ApolloType } from '../../configs/context';

/* eslint-disable no-undef */
declare type SMap<T> = { [key: string]: T };
declare type OMap<O, T> = { [key: O]: T };
/* eslint-enable */

declare var gql: any;

declare module 'Cs' {
  declare interface State {
    apollo: ApolloState;
    accounts: AccountsState;
    solution: ISolutionState;
    exercise: IExerciseState;
    marking: IMarkingState;
    practical: IPracticalState;
  }

  declare interface Store {
    dispatch(action: Object): void;
    getState(): State;
  }

  declare interface Context {
    Store: Store;
    Utils: UtilsType;
    Apollo: ApolloType;
  }

  declare interface ContainerContext {
    (): Context;
  }

  declare interface ComponentContext {
    context: Context;
  }

  declare interface AsyncCallback {
    (errors?: Error | any[] | any, result?: any): void;
  }

  declare interface Saveable {
    (callback?: AsyncCallback): void;
  }
}
