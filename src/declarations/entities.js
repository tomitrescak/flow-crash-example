// @flow
declare module 'Cs/Entities' {

  // Entity base

  declare interface Entity {
    _id: string;
  }

  declare interface NamedEntity extends Entity {
    name: string;
    description: string;
  }

  // Semester

  declare interface Semester extends NamedEntity {
    practicals: Practical[];
  }

  // Practical

  declare interface Practical extends NamedEntity {
    description: string;
    exercises: Exercise[];
  }

  // Exercise

  declare interface QuestionPossibilities {
    possibilities: QuestionPossibility[];
  }

  declare interface QuestionPossibility {
    question: string;
    answer: string;
  }

  declare interface QuestionBase extends Entity {
    description?: string;
    question?: string;
    expectedAnswer?: string;
    control?: "input" | "textbox";
    validation?: string;
    points?: number;
  }

  declare interface Question extends QuestionBase {
    possibilities?: QuestionPossibilities;
  }

  declare interface ExerciseCommon {
    _id: string;
    name: string;
    instructions: string;
    group?: string;
    points: number;
  }

  declare interface Exercise extends ExerciseCommon {
    questions: Question[];
  }

  // Solution

  declare interface Solution extends Entity {
    userId: string;
    user: string;
    semesterId: string;
    practicalId: string;
    exerciseId: string;
    questionId: string;
    userQuestion?: string;
    expectedAnswer?: string;
    userAnswer: string;
    mark?: number;
    created?: Date;
    modified?: number;
    finished?: boolean;
    tutorComment?: string;
  }

  // Groups

  declare interface Group<T> {
    key: string;
    values: T[];
  }
}



