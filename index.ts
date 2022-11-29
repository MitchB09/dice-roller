import RollResult from "./RollResult";
import { sum, removeLowest, removeHighest } from "./utils";

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

const diceRoll = (numDice: number, die: number): number[] => {
  let rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(getRandom(1, die));
  }
  return rolls;
};

const diceRoller = (rollStr: string): RollResult => {
  const parsedRollStr = /(?<num>\d*)[d](?<die>\d+)(?<drop>d[h|l]\d+)?(?<mod>[-|\+]\d+)?/.exec(rollStr);
  if (parsedRollStr && parsedRollStr.groups?.die) {
    const numDice = parsedRollStr.groups?.num ? +parsedRollStr.groups?.num : 1;
    const die = +parsedRollStr.groups?.die;
    const drop = parsedRollStr.groups?.drop;
    const modifier = parsedRollStr.groups?.mod;
    let rollResult = new RollResult(rollStr, diceRoll(numDice, die));

    if (drop) {
      dropLowestHighest(rollResult, drop);
    }

    if (modifier) {
      addModifier(rollResult, modifier);
    }
    return rollResult;
  }
  throw "Unable to parse dice roll";
};

const addModifier = (rollResult: RollResult, modifier: string) => {
  if (modifier.substring(0, 1) === "+") {
    rollResult.setTotal(rollResult.total + +modifier.substring(1));
  } else if (modifier.substring(0, 1) === "-") {
    rollResult.setTotal(rollResult.total - +modifier.substring(1));
  }
}

const dropLowestHighest = (rollResult: RollResult, drop: string) => {
  const dropNum = /(d[h|l](?<addDropNum>\d+))/.exec(drop)?.groups?.addDropNum;
  if (dropNum) {
    let func;
    if (drop.startsWith('dl')) {
      func = removeLowest;
    } else if (drop.startsWith('dh')) {
      func = removeHighest; 
    } else {
      throw "Unable to parse dropping highest/lowest dice roll";
    }

    let numbers = [...rollResult.rolls];
    for (let i = 0; i < +dropNum; i++) {
      numbers = func(numbers);
    }
    rollResult.setTotal(sum(numbers));
  }
}



export default diceRoller;
