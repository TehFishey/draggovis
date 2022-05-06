
/**
 * 
 * @param start 'HH:MM:SS'- format string
 * @param end HH:MM:SS'- format string
 */
export default class TimeRange {
    readonly start: string;
    readonly end: string;
    readonly rollover: boolean;

    constructor(start: string, end: string) {
        this.start = start;
        this.end = end;
        this.rollover = (this.start > this.end) ? true : false;
    }

    includes(time: string) : boolean {

        if(!this.rollover)
            return time >= this.start && time <= this.end;
        else
            return time >= this.start || time <= this.end;

    }
}