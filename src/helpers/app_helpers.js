// @flow
import { Practical, Solution } from 'Cs/Entities';
 
export function markCalculator(practical: Practical): (sols: Solution[]) => number {
  type GroupInfo = { total: number, current: number }
  const groups: SMap<GroupInfo> = {};
  const exercises: SMap<string> = {};
  let groupCount = 0;
  practical.exercises.forEach((e) => {
    let groupName = e.group ? e.group : 'NO__NAME';
    let group = groups[groupName];
    if (!group) {
      group = { total: 0, current: 0 };
      groups[groupName] = group;
      groupCount++;
    }
    group.total += e.questions.length;

    // remember also exercise
    exercises[e._id] = groupName;
  });
  const percentile = 100 / groupCount;

  return function(solutions: Solution[]): number {
    // nullify
    for (let idx of Object.getOwnPropertyNames(groups)) {
      groups[idx].current = 0;
    }

    // calculate current
    for (let sol of solutions) {
      groups[exercises[sol.exerciseId]].current += sol.mark ? (sol.mark / 100) : 0;
    }

    let result = 0;
    for (let idx of Object.getOwnPropertyNames(groups)) {
      let group = groups[idx];
      result += percentile * (group.current / group.total);
    }

    return Math.round(result/10);
  };
}
