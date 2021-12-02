const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

const diceRoll = (numDice: number, die: number): number => {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += getRandom(1, die);
  }
  return total;
};

const diceRoller = (rollStr: string): number => {
  const result = /(\d*)[d](\d+)([-|\+]\d+)?/.exec(rollStr);
  if (result && result?.length >= 3) {
    const numDice = result[1] ? +result[1] : 1;
    const die = +result[2];
    const modifier = result[3];
    let total = diceRoll(numDice, die);

    if (modifier) {
      if (modifier.substring(0, 1) === "+") {
        total += +modifier.substring(1);
      } else if (modifier.substring(0, 1) === "-") {
        total -= +modifier.substring(1);
      }
    }
    return total;
  }
  throw "Unable to parse dice roll";
};

export default diceRoller;
