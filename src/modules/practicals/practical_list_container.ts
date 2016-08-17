// import PracticalListView from './practical_list_view';
// import { connect } from 'apollo-mantra';

// const mapQueriesToProps = (context: Context, { state, ownProps }: Apollo.IGraphQlProps<{}>): Apollo.IGraphqlQuery => ({
//   data: {
//     query: gql`{
//       practicals {
//         _id,
//         name
//       }
//     }`,
//   }
// });

// const mapStateToProps = (context: Context, state: Cs.IState) => ({
//   user: state.accounts.user
// });

// export default connect({mapQueriesToProps, mapStateToProps})(HomeView);