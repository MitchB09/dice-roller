export default class RollResults {
    constructor(rollStr: string, rolls: number[]) {
        this.rollStr = rollStr;
        this.rolls = rolls;
        this.total = rolls.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0
        );
    }

    rollStr: string;
    rolls: number[];
    total: number;

    setTotal = (total: number) => {
        this.total = total;
    }
}