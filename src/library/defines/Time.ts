export class TimeRange {
    readonly start: string;
    readonly end: string;
    readonly rollover: boolean;

    constructor(start: Time, end: Time) {
        this.start = start.toString();
        this.end = end.toString();
        this.rollover = (this.start > this.end) ? true : false;
    }

    includes(time: Time) : boolean {
        let t = time.toString();

        if(!this.rollover)
            return t >= this.start && t <= this.end;
        else
            return t >= this.start || t <= this.end;

    }
}

export class Time {
    readonly hours: string;
    readonly minutes: string;
    readonly seconds: string;

    constructor(hours?: string, minutes?: string, seconds?: string) {
        this.hours = hours || '00';
        this.minutes = minutes || '00';
        this.seconds = seconds || '00';
    }

    toString() : string {
        return `${this.hours}:${this.minutes}:${this.seconds}`
    }
}