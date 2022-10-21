export default class RollResults {
    constructor(rollStr: string, rolls: number[]) {
        this.rollStr = rollStr;
        this.rolls = rolls;
    }

    rollStr: string;
    rolls: number[];
    total?: number;

    setTotal = (total: number) => {
        this.total = total;
    }

    getTotal = () => {
        if (this.total) { return this.total }
        return this.rolls.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0
        );

    }
}