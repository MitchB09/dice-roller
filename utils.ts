export const sum = (numbers: number[]): number => {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  )
}

export const removeLowest = (numbers: number[]) => {
  return numbers.sort().filter((_,i) => i);
}

export const removeHighest = (numbers: number[]) => {
  return numbers.sort().reverse().filter((_,i) => i);
}

export default {sum, removeLowest, removeHighest}