// @flow

import * as React from 'react';
import { Header2, Segment, Button } from 'semanticui-react';
import MarkdownView from '../../core/containers/markdown_container';
import SolutionView from '../../solution/containers/solution_container';
import Loading from '../../core/components/loading_view';

import type { Context, Store } from 'Cs';
import type { User } from 'Cs/Accounts';
import type { Exercise, Solution, Question } from 'Cs/Entities';
import type { IMutations } from 'Apollo';

export interface IContainerProps {
  params: {
    name: string,
    exerciseId: string,
    semesterId: string,
    practicalId: string
  }
}
export interface IComponentProps {
  context: Context;
  userId: string;
  user: User;
}

interface IApolloData {
  exerciseData: {
    exercise: Exercise;
  },
  solutionData: {
    solutions: Solution[];
    refetch: Function;
    loading: boolean;
  }
}

export interface IApolloMutations {
  answers: (solutionIds: string[], userAnswers: string[], finished: boolean) => any;
}

interface IComponentActions {
  answer(answers: Function, ids: string[], userAnswers: string[], data: any, submit: boolean): any;
}
interface IComponent extends IContainerProps, IComponentProps, IComponentActions, IApolloData, IMutations<IApolloMutations> { }

let question: Question;

function readSolutions(store: Store, ids: string[]): string[] {
  let state = store.getState();
  const result: string[] = [];
  for (let id of ids) {
    result.push(state.solution.solutions[id].userAnswer);
  }
  return result;
}

function readSolutionIds(solutions: Array<Solution>): string[] {
  return solutions.map(s => s._id);
}

const ExerciseView = ({ context, user, params, userId, exerciseData,
  exerciseData: { exercise },
  solutionData, solutionData: { solutions },
  answer, mutations: { answers }}: IComponent) => (
    <div>
      <Choose>
        <When condition={!user}>
          <Segment>
            User Logged Out
          </Segment>
        </When>
        <When condition={!exercise}>
          <Loading />
        </When>
        <Otherwise>
          <div>
            <Segment>
              <If condition={user.isRole('tutor')}>
                <Button floated="right" color="orange" text="Modify" icon="edit" labeled="left" url={`/admin/exercise/${context.Utils.Router.encodeUrlName(exercise.name)}/${params.exerciseId}/${params.semesterId}`} />
              </If>
              <Button floated="right" color="default" text="Back to Practical" icon="arrow left" labeled="left" url={`/practical/1/${params.practicalId}/${params.semesterId}`} />
              <Header2 dividing text={`${exercise.name}`} icon="edit" />
              <MarkdownView text={exercise.instructions} />


              <For each="question" of={exercise.questions} index="index">
                <SolutionView key={question._id} question={question} solutionId={solutions.find((s) => s.questionId === question._id)._id} />
              </For>

            </Segment>

            <If condition={solutions && solutions.length && !solutions[0].finished}>
              <Button color="green" text="Submit to Tutor" floated="right"
                onClick={() => {
                  const ids = readSolutionIds(solutions);
                  const userAnswers = readSolutions(context.Store, ids);
                  answer(answers, ids, userAnswers, solutionData, true);
                } } />
            </If>

            <If condition={solutions && solutions.length && solutions[0].finished}>
              <Button color="red" text="Unsubmit"
                onClick={() => {
                  const ids = readSolutionIds(solutions);
                  const userAnswers = readSolutions(context.Store, ids);
                  answer(answers, ids, userAnswers, solutionData, false);
                } } />
            </If>

            <Button color="primary" text="Save" floated="right" labeled="left" icon="save"
              onClick={() => {
                const ids = readSolutionIds(solutions);
                const userAnswers = readSolutions(context.Store, ids);
                answer(answers, ids, userAnswers, solutionData, false);
              } } />
          </div>
        </Otherwise>
      </Choose>
    </div>
  );


export default ExerciseView;