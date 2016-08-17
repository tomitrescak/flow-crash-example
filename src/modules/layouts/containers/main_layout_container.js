// @flow
//import { useDeps, composeAll } from 'mantra-core';
import Layout from '../components/main_layout';
import { connect } from 'apollo-mantra';

import type { Context, State } from 'Cs';

const mapStateToProps = (context: Context, state: State) => ({
  context: context,
  user: state.accounts.user,
  loggingIn: state.accounts.loggingIn
});

const depsToPropsMapper = (context: Context) => ({
  context: context,
  store: context.Store,
});

// export const MainLayout = composeAll(
//   connect(mapStateToProps),
//   useDeps(depsToPropsMapper)
// )(Layout);

export default connect({mapStateToProps})(Layout);
