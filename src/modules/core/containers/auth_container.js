// @flow

import { connect } from 'react-redux';
import { State } from 'Cs';

function noRole() { return false; }

const mapStateToProps = (state: State) => ({
  user: state.accounts.user,
  isAdmin: state.accounts.user ? state.accounts.user.isAdmin() : false,
  isRole: state.accounts.user ? state.accounts.user.isRole : noRole,
  loggingIn: state.accounts.loggingIn
});

export default (component: any) => connect(mapStateToProps)(component);