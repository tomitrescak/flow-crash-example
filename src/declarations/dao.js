// @flow
/* eslint-disable no-unused-vars */
import { Entity, Practical, Semester } from 'Cs/Entities';

declare module 'Cs/Dao' { 
  declare interface IPracticalDAO extends Practical {
    exercises: string[];
  }

  declare interface ISemesterDAO extends Semester {
    practicals: string[];
  } 
}
/* eslint-enable */