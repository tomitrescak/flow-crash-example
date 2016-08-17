// @flow

import * as React from 'react';
import { Header2, Segment, Input, Button, TextArea } from 'semanticui-react';
import QuestionEditView from './question_edit_view';
import Loading from '../../core/components/loading_view';
import * as actions from '../actions/exercise_actions';

import type { Context } from 'Cs';
import type { Exercise, Solution, Question } from 'Cs/Entities';
import type { IMutations } from 'Apollo';

export interface IContainerProps {
  params: {
    name: string,
    exerciseId: string,
    semesterId: string
  }
}
export interface IComponentProps {
  context: Context;
  userId: string;
  exercise: Exercise;
  data?: {
    exercise: Exercise;
    solutions: Solution[];
    refetch: Function;
    loading: boolean;
  }
}

export interface IComponentMutations {
  save: (exerciseId: string) => any;
}

interface IComponentActions {
  insertQuestion: Function;
}
interface IComponent extends IContainerProps, IComponentProps, IComponentActions, IMutations<IComponentMutations> { }

let index: number = 0;
let question: Question;

const ExerciseView = ({ context, params, userId, data, mutations: { save }, exercise, insertQuestion}: IComponent) => {

  const bind = context.Utils.binding(actions.UPDATE, 'exercises.' + exercise._id);

  return (
    <div className="ui form">
      <Choose>
        <When condition={!exercise}>
          <Loading />
        </When>
        <Otherwise>
          <Segment>
            <Input label="Name" placeholder="Name" defaultValue={exercise.name} onChange={bind('name')} />
            <Input label="Group" placeholder="Group" defaultValue={exercise.group} onChange={bind('group')} />
            <TextArea defaultValue={exercise.instructions} label="Instructions" previewMarkdown={true} onChange={bind('instructions')} />

            <For each="question" of={exercise.questions} index="index">
              <Header2 text={"Question: " + (index + 1)} attached="top" />
              <Segment attached="bottom">
                <QuestionEditView key={question._id} question={question} bind={bind} index={index}  />
              </Segment>
            </For>
          </Segment>

          <Button color="primary" text="Submit" floated="right" onClick={() => {
            save(exercise._id).then((result: any) => {
              if (result.errors) {
                alert(JSON.stringify(result.errors));
              }
              // if we have the data we want
              if (result.data) {
                context.Utils.Ui.alert('Life is good!');
              };
            });
          }
          } />

          <Button color="default" text="Insert Question" icon="plus" floated="right" onClick={insertQuestion} />
        </Otherwise>
      </Choose>
    </div>
  );
};


export default ExerciseView;