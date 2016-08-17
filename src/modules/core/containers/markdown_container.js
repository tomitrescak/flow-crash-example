// @flow

import { connect } from 'apollo-mantra';
import Component, { IComponentProps } from '../components/markdown_view';

import type { State, Context } from 'Cs';

interface IProps {
  context?: Context;
  text: string;
}

const mapStateToProps = (context: Context, state: State, ownProps: IProps): IComponentProps => ({
  html: context.Utils.Ui.parseMarkdown(ownProps.text)
});

export default connect({ mapStateToProps })(Component);