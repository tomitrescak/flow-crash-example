// @flow

import ExerciseView, { IContainerProps, IApolloMutations, IComponentProps } from '../components/exercise_view';
import { connect, loadingContainer } from 'apollo-mantra';

import type { Context } from 'Cs';
import type { IGraphqlQuery, IGraphQlProps } from 'Apollo';

const mapQueriesToProps = (context: Context, { state, ownProps }: IGraphQlProps<IContainerProps>): IGraphqlQuery => {
  return {
    exerciseData: {
      query: gql`
      query exercise($exerciseId: String, $userId: String) {
        exercise(id: $exerciseId, userId: $userId) {
          _id
          name
          group
          instructions
          questions {
            _id
            description
            question
            control
            points
          }
        }
      }
    `,
      variables: {
        exerciseId: ownProps.params.exerciseId,
        userId: state.accounts.userId
      }
    },
    solutionData: {
      query: gql`
      query solutions($exerciseId: String, $practicalId: String, $semesterId: String, $userId: String) {
        solutions(semesterId: $semesterId, practicalId: $practicalId, exerciseId: $exerciseId, userId: $userId) {
          _id
          questionId
          userQuestion
          userAnswer
          mark
          tutorComment
          finished
        }
      }
    `,
      // pollInterval: 5000,
      variables: {
        exerciseId: ownProps.params.exerciseId,
        userId: state.accounts.userId,
        semesterId: ownProps.params.semesterId,
        practicalId: ownProps.params.practicalId
      }
    },
  };
};

const mapMutationsToProps = (context: Context, { state, ownProps }: IGraphQlProps<IContainerProps>): IApolloMutations => ({
  answers: (solutionIds: string[], userAnswers: string[], finished: boolean) => ({
    mutation: gql`
        mutation answers($solutionIds: [String]!, $userAnswers: [String]!, $finished: Boolean) {
          answers(solutionIds: $solutionIds, userAnswers: $userAnswers, finished: $finished) 
        }
      `,
    variables: {
      solutionIds,
      userAnswers,
      finished
    },
  }),
});

const mapStateToProps = (context: Context, state: State): IComponentProps => ({
  context,
  user: state.accounts.user,
  userId: state.accounts.userId,
});

const mapDispatchToProps = (context: Context, dispatch: Function, ownProps: IContainerProps) => ({
  answer(answers: Function, ids: String[], userAnswers: String[], data: any, submit: boolean) {
    answers(ids, userAnswers, submit).then((result: any) => {
      if (result.errors) {
        alert(JSON.stringify(result.errors));
        console.error(result.errors);
        console.error(result.errors.stack);
      }
      // if we have the data we want
      if (result.data) {
        let userId = context.Store.getState().accounts.userId;
        context.Utils.Ui.alert('Life is good!');
        data.refetch({ exerciseId: ownProps.params.exerciseId, userId, semesterId: ownProps.params.semesterId, });
      };
    });
  }
});


export default connect({ mapQueriesToProps, mapMutationsToProps, mapStateToProps, mapDispatchToProps })(loadingContainer(ExerciseView, ['exerciseData', 'solutionData']));